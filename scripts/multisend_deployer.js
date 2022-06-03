const {ethers} = require("hardhat");
const chalk = require("chalk");

async function main() {
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
main();