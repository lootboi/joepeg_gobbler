const ethers = require('ethers');
const fs = require('fs');
const launchpegABI = require('../abis/joepegs.json');

//Global variables
const storedWallets = require('./wallets.json'); //AutoGenerated file that stores wallet information
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); //Create provider to connect to network

let wallets = []; //Generated wallets (including private keys)
let successfulWallets = [];
let signers = []; //Signers for each generated wallet
let signedContracts = []; //Instances of signed contracts
let mintedIDs = [];
let nftContract = ''; //Address of contract
let nftPrice = ''; //Price for each NFT you wish to mint

//Create instance of NFT contract
async function createNFTContract() {
    for(let i = 0; i < storedWallets.length; i++) {
        //Create signers for each wallet
        const signer = new ethers.Wallet(wallets[i].privateKey, provider);
        signers.push(signer);

        //Create instance of NFT contract for each wallet
        const contract = new ethers.Contract(nftContract, launchpegABI, signers[i]);
        signedContracts.push(contract);
    }
}

//Generate x random wallets
function generateWallets(numWallets) {
    for (let i = 0; i < numWallets; i++) {
        wallets.push(ethers.Wallet.createRandom());
    }
    saveWallets(wallets);
}

//Save the wallets to a file in case autowithdrawal does not succeed (manually withdraw)
function saveWallets(wallets) {
    fs.writeFileSync('wallets.json', JSON.stringify(wallets));
}

//Fund the wallets
async function fundWallets(wallets, amount) {
    for (let i = 0; i < wallets.length; i++) {
        await wallets[i].send(ethers.utils.parseEther(amount));
    }
}

//Mint Nft from specified contract
async function mintNFTs() {
    for (let i = 0; i < wallets.length; i++) {
        signedContracts[i].connect(wallets[i]).mint(
            wallets[i].address,
            1,
            {value: ethers.utils.parseEther(nftPrice)});
    }
    await fetchNFTs();
}

//Withdraw all NFTs into the admin wallet after finding tokenIDs
async function fetchNFTs() {
        for(let i = 0; i < wallets.length; i++) {
        findTokenID(wallets[i].address);
    }
    for(let i = 0; i < successfulWallets.length; i++) {
        await signedContracts[i].connect(successfulWallets[i]).transfer(adminAddress, mintedIDs[i]);
    }
}

//Check if the NFT contract has entered the public minting phase (3)
async function checkMintState() {
    if( signedContracts[0].currentPhase != 3) {
        console.log('Public Mint has not started yet...')
        await checkMintState(); //If not, check again
    } else {
        console.log('Public Mint has started!');
        await mintNFTs(); //If it has, mint NFTs
    }
}

//Find tokenID of ERC721 token after minting
async function findTokenID(walletAddress) {
    for(let i = 0; i < wallets.length; i++) {
        if(await signedContracts[i].balanceOf(wallets[i].address) == 0) {
            console.log('Wallet #' + i + ' has no NFTs');
        } else {
            console.log('Wallet #' + i + ' has NFTs');
            const nftBalance = await signedContracts[i].balanceOf(wallets[i].address);
            const nft = await signedContracts[i].tokenOfOwnerByIndex(wallets[i].address, nftBalance - 1);
            mintedIDs.push(nft); //Add tokenID to array
            successfulWallets.push(wallets[i]); //Add wallets with successful mints to array
        }
    }
}

//Run the function
async function main() {
    generateWallets(10);
    createNFTContract();
}
main();