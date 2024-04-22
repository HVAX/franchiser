const hre = require('hardhat');

async function main() {
    const factory = await hre.ethers.deployContract('FranchiserFactory', ['0x912CE59144191C1204E64559FE8253a0e49E6548']);
    await factory.deployed();
    console.log(`Franchiser factory deployed to ${factory.address}`);

    const lens = await hre.ethers.deployContract('FranchiserLens', ['0x912CE59144191C1204E64559FE8253a0e49E6548', factory.address]);
    await lens.deployed();
    console.log(`Lens deployed to ${lens.address}`);
  }
  main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })