var SampleToken = artifacts.require("mytoken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "MyToken", "kes", 8, 100000000000000);
};