import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-ethers';
import '@defi-wonderland/hardhat-account-abstraction';

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      url: process.env.RPC_URL as string,
      accounts: [process.env.PRIVATE_KEY as string],
      accountAbstraction: {
        bundlerUrl: process.env.BUNDLER_URL as string,
        paymasterUrl: process.env.PAYMASTER_URL as string,
      }
    }
  }
};

export default config;
