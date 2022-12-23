const tda = require('tda-api-client')
const { getAccountId } = require('../config/tda_config.js')

let num = 0

function heartbeat() {
  console.log('running heartbeat #', ++num, 'time:', (new Date()).toLocaleString('en-US'))
  tda.accounts.getAccount({ accountId: getAccountId(), fields: 'positions,orders' })
    .then(account => console.log(account.securitiesAccount.accountId))
    .catch(error => {
      console.log('error on heartbeat #', num, 'time:', (new Date()).toLocaleString('en-US'))
      console.log(error)
    })
}

module.exports = function() {
  return setInterval(heartbeat, 60000)
}
