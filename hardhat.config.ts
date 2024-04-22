import { HardhatUserConfig, extendEnvironment } from 'hardhat/config';
import { NetworkUserConfig } from 'hardhat/types';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';
dotenv.config();
import '@nomiclabs/hardhat-web3';
// require('@openzeppelin/hardhat-upgrades');

const baseGoerliUrl = 'https://goerli.infura.io/v3/';
const baseMainnnetUrl = 'https://mainnet.infura.io/v3/';

extendEnvironment((env) => {
  // const Web3 = require('web3');
  // env.web3 = Web3;

  // env.web3 = new Web3(env.network.provider);
});

const networks: { [index: string]: NetworkUserConfig } = {
  hardhat: {
    chainId: 31337,
    forking: {
      url: `${baseGoerliUrl}${process.env.INFURA_API_KEY}`
    }
  },
  mainnet: {
    chainId: 1,
    url: `${baseMainnnetUrl}${process.env.INFURA_API_KEY}`,
    accounts:
      process.env.PRIVATE_KEY != undefined ? [process.env.PRIVATE_KEY] : []
  },
  goerli: {
    chainId: 5,
    url: `${baseGoerliUrl}${process.env.INFURA_API_KEY}`,
    accounts:
      process.env.PRIVATE_KEY != undefined ? [process.env.PRIVATE_KEY] : []
  },
  scrollSepolia : {
    url: "https://sepollia-rpc.scroll.io/" || "",
    accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  },
  scrollMainnet: {
    chainId: 534352,
    url: "https://rpc.scroll.io/" || "",
    accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  },
  opMainnet: {
    chainId: 10,
    url: "https://mainnet.optimism.io",
    accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  },
  arbitrumOne: {
    chainId: 42161,
    url: process.env.RPC_URL,
    accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  }
};

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.15',
    settings: {
      metadata: {
        bytecodeHash: 'none'
      },
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 100000
  },
  // etherscan: {
  //   apiKey: {
  //     mainnet: process.env.ETHERSCAN_API_KEY || '',
  //     goerli: process.env.ETHERSCAN_API_KEY || '',
  //     optimisticEthereum: process.env.ETHERSCAN_API_KEY || '',
  //   }
  // },
  networks: networks,
  defaultNetwork: 'goerli'
};

export default config;
