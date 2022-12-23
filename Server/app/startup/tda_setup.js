const tda = require("../tda.js");

const { setAccountId } = require("../../config/tda_config.js");

module.exports = function (options) {
  // login to tda

  // get accountId
  tda.accounts
    .getAccounts({ fields: "positions,orders" })
    .then((accounts) => {
      // set config id to first accountId
      // consider adding more control if you ever get more accounts
      // console.log(accounts)
      console.log("Got account:", accounts[0].securitiesAccount.accountId);
      setAccountId(accounts[0].securitiesAccount.accountId);
    })
    //.then(accountId => getUserInfo(accountId))
    .catch((e) => {
      console.log("Error: could not get account. ", e);
    });

  // get User Info
  // tda.accounts.
};
