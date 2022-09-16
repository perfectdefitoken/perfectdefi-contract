var PerfectDefiToken = artifacts.require("PerfectDefiToken");

// Deploy to mainnet
module.exports = function(deployer) {
  // deployment steps
    deployer.deploy(PerfectDefiToken, 
      "0x22e09568b2835b09Ff9fB050cdBd2A8ec7Dab0Cd",
      "0x22e09568b2835b09Ff9fB050cdBd2A8ec7Dab0Cd"
    );
};