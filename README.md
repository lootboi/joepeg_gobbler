# Joepeg Launchpeg contract bot
## Description

This repo serves as a simple example of a script that will snipe [Joepegs](https://joepegs.com/) [Launchpeg](https://github.com/traderjoe-xyz/launchpeg/blob/main/contracts/Launchpeg.sol) contracts once the following constraints are met:

1. Contract has entered phase 3 (public minting phase)

2. Each wallet has been funding with enough (w)avax in order to pay for both gas and mint, if not free.

Once the script is running, you will be prompted to answer a series of questions in order to initialize the bot. This includes:

- How many wallets do you want to create?

- What is your wallet address?*

- How much do you want to fund your wallets with?

- What is the contract address you wish to snipe?

*This will serve as the "admin" wallet to fund your newly generated wallets + recieve minted NFTs

After you have answered these questions, the script will loop until the constraints are met. As soon as public mint opens, the script will attempt to mint using the wallets that you generated and are now stored in ```wallets.json``` for your convenience. Once your transactions have gone through, the script will tell you how many wallets were successful and send all of the newly minted NFTs into your admin wallet.

**USE AT YOUR OWN RISK!**
This script is not guaranteed to work nor is it the *best* way to go about sniping contracts. There are several ways to optimize this bot which are not currently implemented.
## Requirements
```npm``` 
```Node.js```
[Download](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Initialize repo

1. Install dependancies ```npm install```
2. Use ```ENV_EXAMPLE``` to configure your own ```.env``` file

## Usage

```npm run gobbler```

Follow the prompts in the terminal! Good luck!

## To Do
- Create test scripts
- Implement multicall contract or create funding contract to fund wallets and avoid replacement fee error
- Unit test using test scripts
- Explore ways to limit bot wallets from competing with themselves
	- Same gas values or different gas values?
- Allow sniping of both [Launchpeg](https://github.com/traderjoe-xyz/launchpeg/blob/main/contracts/Launchpeg.sol) contracts as well as standard [ERC721](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol) NFTs 

## Connect with me
If you have any success or questions, feel free to reach out to me!
[Twitter](https://twitter.com/AltLoot) @AltLoot