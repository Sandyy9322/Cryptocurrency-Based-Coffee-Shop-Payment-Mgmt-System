require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0xdfabbd9def7eccbf3eac933e99b2542f1a197f8b0b113f43ff37425de96463e3"],
    },
  },
};


