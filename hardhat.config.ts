import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-ethers';
import '@defi-wonderland/sponsored-txs-hardhat-plugin';

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL as string,
      accounts: [process.env.PRIVATE_KEY as string],
      sponsorUrl: 'http://localhost:3000',
    }
  }
};

export default config;
