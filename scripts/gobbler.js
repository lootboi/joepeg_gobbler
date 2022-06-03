const { ethers } = require("hardhat");
const chalk = require('chalk');
const readline = require('readline');
require('dotenv').config()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Set up network, provider, and minting
const url = process.env.URL; //Connect to the network you want to run the script on 
const mintingAddress = process.env.MINTING_ADDRESS; //Address of the contract that you want to mint
const provider = new ethers.providers.JsonRpcProvider(url);

//Set up Admin Wallet
const pkey = process.env.PKEY;
const adminWallet = new ethers.Wallet(pkey, provider);

async function createContract() {
  var contractFactory = await ethers.getContractFactory('MultiSend');
console.log(chalk.blue('Deploying Multisend...'));
  const multiContract = await contractFactory.deploy();
      await multiContract.deployed();
  console.log(chalk.blue('Multisend Deployed at:'));
  console.log(chalk.yellow(multiContract.address));

  const adminAddress = process.env.ADMIN_ADDRESS;
  const contractOwner = await multiContract.getOwner();
  if( contractOwner  != adminAddress) {
      console.log(chalk.blue('Admin is Owner of MultiSend Contract!'))
  } else {
      console.log(chalk.red('ERROR: Admin is not Owner of Multisend Contract'))
  }
};
createContract();

//---------------// Create Wallets \\---------------\\
const wallet1 = ethers.Wallet.createRandom();
const signer1 = new ethers.Wallet(wallet1.privateKey, provider)
const mintingContract1 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer1
);
const wallet2 = ethers.Wallet.createRandom();
const signer2 = new ethers.Wallet(wallet2.privateKey, provider)
const mintingContract2 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer2
);
const wallet3 = ethers.Wallet.createRandom();
const signer3 = new ethers.Wallet(wallet3.privateKey, provider)
const mintingContract3 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer3
);
const wallet4 = ethers.Wallet.createRandom();
const signer4 = new ethers.Wallet(wallet4.privateKey, provider)
const mintingContract4 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer4
);
const wallet5 = ethers.Wallet.createRandom();
const signer5 = new ethers.Wallet(wallet5.privateKey, provider)
const mintingContract5 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer5
);
const wallet6 = ethers.Wallet.createRandom();
const signer6 = new ethers.Wallet(wallet6.privateKey, provider)
const mintingContract6 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer6
);
const wallet7 = ethers.Wallet.createRandom();
const signer7 = new ethers.Wallet(wallet7.privateKey, provider)
const mintingContract7 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer7
);
const wallet8 = ethers.Wallet.createRandom();
const signer8 = new ethers.Wallet(wallet8.privateKey, provider)
const mintingContract8 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer8
);
const wallet9 = ethers.Wallet.createRandom();
const signer9 = new ethers.Wallet(wallet9.privateKey, provider)
const mintingContract9 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer9
);
const wallet10 = ethers.Wallet.createRandom();
const signer10 = new ethers.Wallet(wallet10.privateKey, provider)
const mintingContract10 = new ethers.Contract( 
  mintingAddress,
  ['function createPair(address tokenA, address tokenB) external returns (address pair)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
  signer10
);
// const wallet11 = ethers.Wallet.createRandom();
// const signer11 = new ethers.Wallet(wallet11.privateKey, provider)
// const mintingContract11 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer11
// );
// const wallet12 = ethers.Wallet.createRandom();
// const signer12 = new ethers.Wallet(wallet12.privateKey, provider)
// const mintingContract12 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer12
// );
// const wallet13 = ethers.Wallet.createRandom();
// const signer13 = new ethers.Wallet(wallet13.privateKey, provider)
// const mintingContract13 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer13
// );
// const wallet14 = ethers.Wallet.createRandom();
// const signer14 = new ethers.Wallet(wallet14.privateKey, provider)
// const mintingContract14 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer14
// );
// const wallet15 = ethers.Wallet.createRandom();
// const signer15 = new ethers.Wallet(wallet15.privateKey, provider)
// const mintingContract15 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer15
// );
// const wallet16 = ethers.Wallet.createRandom();
// const signer16 = new ethers.Wallet(wallet16.privateKey, provider)
// const mintingContract16 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer16
// );
// const wallet17 = ethers.Wallet.createRandom();
// const signer17 = new ethers.Wallet(wallet17.privateKey, provider)
// const mintingContract17 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer17
// );
// const wallet18 = ethers.Wallet.createRandom();
// const signer18 = new ethers.Wallet(wallet18.privateKey, provider)
// const mintingContract18 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer18
// );
// const wallet19 = ethers.Wallet.createRandom();
// const signer19 = new ethers.Wallet(wallet19.privateKey, provider)
// const mintingContract19 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer19
// );
// const wallet20 = ethers.Wallet.createRandom();
// const signer20 = new ethers.Wallet(wallet20.privateKey, provider)
// const mintingContract20 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer20
// );
// const wallet21 = ethers.Wallet.createRandom();
// const signer21 = new ethers.Wallet(wallet21.privateKey, provider)
// const mintingContract21 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer21
// );
// const wallet22 = ethers.Wallet.createRandom();
// const signer22 = new ethers.Wallet(wallet22.privateKey, provider)
// const mintingContract22 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer22
// );
// const wallet23 = ethers.Wallet.createRandom();
// const signer23 = new ethers.Wallet(wallet23.privateKey, provider)
// const mintingContract23 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer23
// );
// const wallet24 = ethers.Wallet.createRandom();
// const signer24 = new ethers.Wallet(wallet24.privateKey, provider)
// const mintingContract24 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer24
// );
// const wallet25 = ethers.Wallet.createRandom();
// const signer25 = new ethers.Wallet(wallet25.privateKey, provider)
// const mintingContract25 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer25
// );
// const wallet26 = ethers.Wallet.createRandom();
// const signer26 = new ethers.Wallet(wallet26.privateKey, provider)
// const mintingContract26 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer26
// );
// const wallet27 = ethers.Wallet.createRandom();
// const signer27 = new ethers.Wallet(wallet27.privateKey, provider)
// const mintingContract27 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer27
// );
// const wallet28 = ethers.Wallet.createRandom();
// const signer28 = new ethers.Wallet(wallet28.privateKey, provider)
// const mintingContract28 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer28
// );
// const wallet29 = ethers.Wallet.createRandom();
// const signer29 = new ethers.Wallet(wallet29.privateKey, provider)
// const mintingContract29 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer29
// );
// const wallet30 = ethers.Wallet.createRandom();
// const signer30 = new ethers.Wallet(wallet30.privateKey, provider)
// const mintingContract30 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer30
// );
// const wallet31 = ethers.Wallet.createRandom();
// const signer31 = new ethers.Wallet(wallet31.privateKey, provider)
// const mintingContract31 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer31
// );
// const wallet32 = ethers.Wallet.createRandom();
// const signer32 = new ethers.Wallet(wallet32.privateKey, provider)
// const mintingContract32 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer32
// );
// const wallet33 = ethers.Wallet.createRandom();
// const signer33 = new ethers.Wallet(wallet33.privateKey, provider)
// const mintingContract33 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer33
// );
// const wallet34 = ethers.Wallet.createRandom();
// const signer34 = new ethers.Wallet(wallet34.privateKey, provider)
// const mintingContract34 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer34
// );
// const wallet35 = ethers.Wallet.createRandom();
// const signer35 = new ethers.Wallet(wallet35.privateKey, provider)
// const mintingContract35 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer35
// );
// const wallet36 = ethers.Wallet.createRandom();
// const signer36 = new ethers.Wallet(wallet36.privateKey, provider)
// const mintingContract36 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer36
// );
// const wallet37 = ethers.Wallet.createRandom();
// const signer37 = new ethers.Wallet(wallet37.privateKey, provider)
// const mintingContract37 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer37
// );
// const wallet38 = ethers.Wallet.createRandom();
// const signer38 = new ethers.Wallet(wallet38.privateKey, provider)
// const mintingContract38 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer38
// );
// const wallet39 = ethers.Wallet.createRandom();
// const signer39 = new ethers.Wallet(wallet39.privateKey, provider)
// const mintingContract39 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer39
// );
// const wallet40 = ethers.Wallet.createRandom();
// const signer40 = new ethers.Wallet(wallet40.privateKey, provider)
// const mintingContract40 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer40
// );
// const wallet41 = ethers.Wallet.createRandom();
// const signer41 = new ethers.Wallet(wallet41.privateKey, provider)
// const mintingContract41 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer41
// );
// const wallet42 = ethers.Wallet.createRandom();
// const signer42 = new ethers.Wallet(wallet42.privateKey, provider)
// const mintingContract42 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer42
// );
// const wallet43 = ethers.Wallet.createRandom();
// const signer43 = new ethers.Wallet(wallet43.privateKey, provider)
// const mintingContract43 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer43
// );
// const wallet44 = ethers.Wallet.createRandom();
// const signer44 = new ethers.Wallet(wallet44.privateKey, provider)
// const mintingContract44 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer44
// );
// const wallet45 = ethers.Wallet.createRandom();
// const signer45 = new ethers.Wallet(wallet45.privateKey, provider)
// const mintingContract45 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer45
// );
// const wallet46 = ethers.Wallet.createRandom();
// const signer46 = new ethers.Wallet(wallet46.privateKey, provider)
// const mintingContract46 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer46
// );
// const wallet47 = ethers.Wallet.createRandom();
// const signer47 = new ethers.Wallet(wallet47.privateKey, provider)
// const mintingContract47 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer47
// );
// const wallet48 = ethers.Wallet.createRandom();
// const signer48 = new ethers.Wallet(wallet48.privateKey, provider)
// const mintingContract48 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer48
// );
// const wallet49 = ethers.Wallet.createRandom();
// const signer49 = new ethers.Wallet(wallet49.privateKey, provider)
// const mintingContract49 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer49
// );
// const wallet50 = ethers.Wallet.createRandom();
// const signer50 = new ethers.Wallet(wallet50.privateKey, provider)
// const mintingContract50 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer50
// );
// const wallet51 = ethers.Wallet.createRandom();
// const signer51 = new ethers.Wallet(wallet51.privateKey, provider)
// const mintingContract51 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer51
// );
// const wallet52 = ethers.Wallet.createRandom();
// const signer52 = new ethers.Wallet(wallet52.privateKey, provider)
// const mintingContract52 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer52
// );
// const wallet53 = ethers.Wallet.createRandom();
// const signer53 = new ethers.Wallet(wallet53.privateKey, provider)
// const mintingContract53 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer53
// );
// const wallet54 = ethers.Wallet.createRandom();
// const signer54 = new ethers.Wallet(wallet54.privateKey, provider)
// const mintingContract54 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer54
// );
// const wallet55 = ethers.Wallet.createRandom();
// const signer55 = new ethers.Wallet(wallet55.privateKey, provider)
// const mintingContract55 = new ethers.Contract( 
//   mintingAddress,
//   ['function createPair(address tokenA, address tokenB) external returns (address pair)',
//   'function getPair(address tokenA, address tokenB) external view returns (address pair)'],
//   signer55
// );

  
//---------------// Connect Wallets \\---------------\\

rl.question('How many gobblers do you want to swarm? (up to 10)', function (gobblerCount) {
  rl.question('How much ether in total would you like to fund your gobblers?', function (gobblerFund) {

    var tx = {
      to: wallet1.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx);
    var tx1 = {
      to: wallet2.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx1);
    var tx2 = {
      to: wallet3.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx2);
    var tx3 = {
      to: wallet4.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx3);
    var tx4 = {
      to: wallet5.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx4);
    var tx4 = {
      to: wallet6.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx4);
    var tx4 = {
      to: wallet7.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx4);
    var tx4 = {
      to: wallet8.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx4);
    var tx4 = {
      to: wallet9.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx4);
    var tx4 = {
      to: wallet10.address,
      value: ethers.utils.parseEther(gobblerFund)
    };
      adminWallet.sendTransaction(tx4);

      
    if(gobblerCount == 1) {
      console.log(chalk.blue('Creating gobbler(s)...'));
        wallet1;
          console.log(chalk.blue('Gobbler #1:') + chalk.yellow(wallet1.address));
          console.log(chalk.blue('Funding gobbler(s)...'));
          var tx = {
                    to: wallet1.address,
                    value: ethers.utils.parseEther(gobblerFund)
                  };
                  function send() {
                   adminWallet.sendTransaction(tx).then((txObj) => {
                     console.log(chalk.blue('Gobbler #1 Funded at:') + chalk.yellow(txObj.hash));
                   });
                  };
                  send();
      } else if(gobblerCount == 2) {
        async function main() {
        console.log(chalk.blue('Creating wallet(s)...'));
            wallet1;
            console.log(chalk.blue('Gobbler #1:', wallet2.address));
            wallet2;
            console.log(chalk.blue('Gobbler #2:', wallet3.address));
        
        //Fund MultiSend contract
        console.log(chalk.blue('Sending specified ether to MultiSend Contract...'));
           await multiContract.charge(gobblerFund);
        console.log(chalk.blue('Sent', chalk.yellow(gobblerFund), 'to MultiSend Contract'));
        
        setTimeout(async () => {var fundAmount = (gobblerFund / 2);
        await multiContract.withdrawls(
          [wallet1.address, wallet2.address],
           [fundAmount, fundAmount],
            { value: ethers.utils.parseEther(gobblerFund)},
            {
              gasLimit: 9000000,
            });
            console.log(chalk.blue('Gobblers funded, check etherscan....'));
          }, 30000);
          main();
      };
            } else if(gobblerCount == 3) {
              console.log(chalk.blue('Creating wallet(s)...'));
                wallet4;
                console.log(chalk.blue('Gobbler #1:', wallet4.address));
                wallet5;
                console.log(chalk.blue('Gobbler #2:', wallet5.address));
                wallet6;
                console.log(chalk.blue('Gobbler #3:', wallet6.address));
              //Fund Wallets
                console.log(chalk.blue('Funding gobbler(s)...'));
                tx = {
                      to: wallet4.address,
                      value: ethers.utils.parseEther(gobblerFund)
                    };
               adminWallet.sendTransaction(tx).then((txObj) => {
                 console.log(chalk.blue('Gobbler #1 Funded at:' + chalk.yellow(txObj.hash)));
               });
             var tx1 = {
                to: wallet5.address,
                value: ethers.utils.parseEther(gobblerFund),
              };
               adminWallet.sendTransaction(tx1).then((tx1Obj) => {
                console.log(chalk.blue('Gobbler #2 Funded at:' + chalk.yellow(tx1Obj.hash)));
              });
                           var tx1 = {
                to: wallet3.address,
                value: ethers.utils.parseEther(gobblerFund),
              };
               adminWallet.sendTransaction(tx1).then((tx1Obj) => {
                console.log(chalk.blue('Gobbler #2 Funded at:' + chalk.yellow(tx1Obj.hash)));
              });
                } else if(gobblerCount == 4) {
                  console.log(chalk.blue('Creating wallet(s)...'));
                    wallet7;
                    console.log(chalk.blue('Gobbler #1:', wallet7.address));
                    wallet8;
                    console.log(chalk.blue('Gobbler #2:', wallet8.address));
                    wallet9;
                    console.log(chalk.blue('Gobbler #3:', wallet9.address));
                    wallet10  ;
                    console.log(chalk.blue('Gobbler #4:', wallet10.address));
                    } else if(gobblerCount == 5) {
                      console.log(chalk.blue('Creating wallet(s)...'));
                        wallet11;
                        console.log(chalk.blue('Gobbler #1:', wallet11.address));
                        wallet12;
                        console.log(chalk.blue('Gobbler #2:', wallet12.address));
                        wallet13;
                        console.log(chalk.blue('Gobbler #3:', wallet13.address));
                        wallet14;
                        console.log(chalk.blue('Gobbler #4:', wallet14.address));
                        wallet15;
                        console.log(chalk.blue('Gobbler #5:', wallet15.address));
                        } else if(gobblerCount == 6) {
                          console.log(chalk.blue('Creating wallet(s)...'));
                            wallet16;
                            console.log(chalk.blue('Gobbler #1:', wallet16.address));
                            wallet17;
                            console.log(chalk.blue('Gobbler #2:', wallet17.address));
                            wallet18;
                            console.log(chalk.blue('Gobbler #3:', wallet18.address));
                            wallet19;
                            console.log(chalk.blue('Gobbler #4:', wallet19.address));
                            wallet20;
                            console.log(chalk.blue('Gobbler #5:', wallet20.address));
                            wallet21;
                            console.log(chalk.blue('Gobbler #6:', wallet21.address));
                            } else if(gobblerCount == 7) {
                              console.log(chalk.blue('Creating wallet(s)...'));
                                wallet22;
                                console.log(chalk.blue('Gobbler #1:', wallet22.address));
                                wallet23;
                                console.log(chalk.blue('Gobbler #2:', wallet23.address));
                                wallet24;
                                console.log(chalk.blue('Gobbler #3:', wallet24.address));
                                wallet25;
                                console.log(chalk.blue('Gobbler #4:', wallet25.address));
                                wallet26;
                                console.log(chalk.blue('Gobbler #5:', wallet26.address));
                                wallet27;
                                console.log(chalk.blue('Gobbler #6:', wallet27.address));
                                wallet28;
                                console.log(chalk.blue('Gobbler #7:', wallet28.address));
                                } else if(gobblerCount == 8) {
                                  console.log(chalk.blue('Creating wallet(s)...'));
                                    wallet29;
                                    console.log(chalk.blue('Gobbler #1:', wallet29.address));
                                    wallet30;
                                    console.log(chalk.blue('Gobbler #2:', wallet30.address));
                                    wallet31;
                                    console.log(chalk.blue('Gobbler #3:', wallet31.address));
                                    wallet32;
                                    console.log(chalk.blue('Gobbler #4:', wallet32.address));
                                    wallet33;
                                    console.log(chalk.blue('Gobbler #5:', wallet33.address));
                                    wallet34;
                                    console.log(chalk.blue('Gobbler #6:', wallet34.address));
                                    wallet35;
                                    console.log(chalk.blue('Gobbler #7:', wallet35.address));
                                    wallet36;
                                    console.log(chalk.blue('Gobbler #8:', wallet36.address));
                                    } else if(gobblerCount == 9) {
                                      console.log(chalk.blue('Creating wallet(s)...'));
                                        wallet37;
                                        console.log(chalk.blue('Gobbler #1:', wallet37.address));
                                        wallet38;
                                        console.log(chalk.blue('Gobbler #2:', wallet38.address));
                                        wallet39;
                                        console.log(chalk.blue('Gobbler #3:', wallet39.address));
                                        wallet40;
                                        console.log(chalk.blue('Gobbler #4:', wallet40.address));
                                        wallet41;
                                        console.log(chalk.blue('Gobbler #5:', wallet41.address));
                                        wallet42;
                                        console.log(chalk.blue('Gobbler #6:', wallet42.address));
                                        wallet43;
                                        console.log(chalk.blue('Gobbler #7:', wallet43.address));
                                        wallet44;
                                        console.log(chalk.blue('Gobbler #8:', wallet44.address));
                                        wallet45;
                                        console.log(chalk.blue('Gobbler #9:', wallet45.address));
                                        } else if(gobblerCount == 10) {
                                          console.log(chalk.blue('Creating wallet(s)...'));
                                            wallet46;
                                            console.log(chalk.blue('Gobbler #1:', wallet46.address));
                                            wallet47;
                                            console.log(chalk.blue('Gobbler #2:', wallet47.address));
                                            wallet48;
                                            console.log(chalk.blue('Gobbler #3:', wallet48.address));
                                            wallet49;
                                            console.log(chalk.blue('Gobbler #4:', wallet49.address));
                                            wallet50;
                                            console.log(chalk.blue('Gobbler #5:', wallet50.address));
                                            wallet51;
                                            console.log(chalk.blue('Gobbler #6:', wallet51.address));
                                            wallet52;
                                            console.log(chalk.blue('Gobbler #7:', wallet52.address));
                                            wallet53;
                                            console.log(chalk.blue('Gobbler #8:', wallet53.address));
                                            wallet54;
                                            console.log(chalk.blue('Gobbler #9:', wallet54.address));
                                            wallet55;
                                            console.log(chalk.blue('Gobbler #10:', wallet55.address));
                                        }
                                  });
                            });
    
//   rl.question('How much ether would you like to fund each gobbler with?', function (gobblerFund) {
//     if(gobblerCount == 1) {
//       console.log(chalk.blue(`Funding ${gobblerCount} gobbler wallets with ${gobblerFund} ether`));
//       var tx = {
//         to: wallet1.address,
//         value: ethers.utils.parseEther(gobblerFund)
//       };
//       function send() {
//        adminWallet.sendTransaction(tx).then((txObj) => {
//          console.log('Gobbler #1 Funded at:', txObj.hash)
//        });
//       };
//       send();
//       } else if(gobblerCount == 2) {
//         tx = {
//           to: wallet2.address,
//           value: ethers.utils.parseEther(gobblerFund)
//         };
//          adminWallet.sendTransaction(tx).then((txObj) => {
//            console.log('Gobbler #1 Funded at:', txObj.hash)
//          });
//        var tx1 = {
//           to: wallet3.address,
//           value: ethers.utils.parseEther(gobblerFund),
//         };
//          adminWallet.sendTransaction(tx1);
//         } else if(gobblerCount == 3) {
//           tx = {
//             to: wallet4.address,
//             value: ethers.utils.parseEther(gobblerFund)
//           };
//            adminWallet.sendTransaction(tx);
//           tx1 = {
//             to: wallet5.address,
//             value: ethers.utils.parseEther(gobblerFund)
//           };
//            adminWallet.sendTransaction(tx1);
//           var tx2 = {
//             to: wallet6.address,
//             value: ethers.utils.parseEther(gobblerFund)
//           };
//            adminWallet.sendTransaction(tx2);
//           } else if(gobblerCount == 4) {
//             tx = {
//               to: wallet7.address,
//               value: ethers.utils.parseEther(gobblerFund)
//             };
//              adminWallet.sendTransaction(tx);
//             tx1 = {
//               to: wallet8.address,
//               value: ethers.utils.parseEther(gobblerFund)
//             };
//              adminWallet.sendTransaction(tx1);
//             tx2 = {
//               to: wallet9.address,
//               value: ethers.utils.parseEther(gobblerFund)
//             };
//              adminWallet.sendTransaction(tx2);
//             var tx3 = {
//               to: wallet10.address,
//               value: ethers.utils.parseEther(gobblerFund)
//             };
//              adminWallet.sendTransaction(tx3);
//             } else if(gobblerCount == 5) {
//               tx = {
//                 to: wallet7.address,
//                 value: ethers.utils.parseEther(gobblerFund)
//               };
//                adminWallet.sendTransaction(tx);
//               tx1 = {
//                 to: wallet8.address,
//                 value: ethers.utils.parseEther(gobblerFund)
//               };
//                adminWallet.sendTransaction(tx1);
//               tx2 = {
//                 to: wallet9.address,
//                 value: ethers.utils.parseEther(gobblerFund)
//               };
//                adminWallet.sendTransaction(tx2);
//               tx3 = {
//                 to: wallet10.address,
//                 value: ethers.utils.parseEther(gobblerFund)
//               };
//                adminWallet.sendTransaction(tx3);
//               var tx4 = {
//                 to: wallet10.address,
//                 value: ethers.utils.parseEther(gobblerFund)
//               };
//                adminWallet.sendTransaction(tx4);

//               } else if(gobblerCount == 6) {

//                 } else if(gobblerCount == 7) {

//                    } else if(gobblerCount == 8) {

//                      } else if(gobblerCount == 9) {

//                         } else if(gobblerCount == 10) {

//                             }
//     rl.close();
//   });
// });
// rl.on('close', function () {
//   console.log(chalk.blue('\nGobblers ready to eat NFTs'));
//   process.exit(0);
// });