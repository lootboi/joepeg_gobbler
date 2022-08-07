const generateWalletsAndSave = './createWallets.js';

console.log('testing wallet creation');
try {
    generateWalletsAndSave(10);
}
catch (err) {
    console.log(err);
}

