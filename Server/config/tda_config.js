let accountId = null
const getAccountId = function() { return accountId }
const setAccountId = function(id) {
  if (accountId == id) { return }
  accountId = id
  console.log("Switched to account ", accountId)
}

module.exports = {
  // apikey,
  getAccountId,
  setAccountId
}
