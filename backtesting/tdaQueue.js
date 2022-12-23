const tda = require('tda-api-client')

const queue = []

const queuer = function (func) {
  return function (...args) {
    queue.push({ func, args })
  }
}

const shiftQueue = async function() {
  let f = queue.shift()
  return await new Promise(f.func(f.args)) // ??
}

// TDA: 120 calls per minute, interval 500 ms
const playQueue = async function(interval) {
  return setInterval(() => {
    if(queue.length > 0) {
      // (queue.shift())() // doesn't take arguments

      // let f = queue.shift()
      // f.func(f.args) // doesn't work for async

      await shiftQueue() // ??????
    }
  }, interval)
}

// only queue functions that use POST ? or not GET
const tdaIndex = {
  accounts: {
    getAccount: queuer(tda.accounts.getAccount),
    getAccounts: queuer(tda.accounts.getAccount)s
  },
  authentication: {
    getAuthentication: queuer(tda.authentication.getAuthentication),
    refreshAuthentication: queuer(tda.authentication.refreshAuthenticati)on,
  },
  instruments: {
    getInstrument: queuer(tda.instruments.getInstrument), // **
    searchInstrument: queuer(tda.instruments.searchInstrument), // **
  },
  markethours: {
    getSingleMarketHours: queuer(tda.markethours.getSingleMarketHours), // **
    getMultipleMarketHours: queuer(tda.markethours.getMultipleMarketHours), // **
  },
  movers: {
    getMovers: queuer(tda.movers.getMovers) // **
  },
  optionchain: {
    getOptionChain: queuer(tda.optionchain.getOptionChain) // **
  },
  orders: {
    placeOrder: queuer(tda.orders.placeOrder),
    replaceOrder: queuer(tda.orders.replaceOrder),
    cancelOrder: queuer(tda.orders.cancelOrder),
    getOrder: queuer(tda.orders.getOrder),
    getOrdersByAccount: queuer(tda.orders.getOrdersByAccount),
    getOrdersByQuery: queuer(tda.orders.getOrdersByQuery),
  },
  pricehistory: {
    getPriceHistory: queuer(tda.pricehistory.getPriceHistory) // **
  },
  quotes: {
    getQuote: queuer(tda.quotes.getQuote), // **
    getQuotes: queuer(tda.quotes.getQuotes) // **
  },
  savedorders: {
    createSavedOrder: queuer(tda.savedorders.createdSavedOrderm),
    deleteSavedOrder: queuer(tda.savedorders.deleteSavedOrderm),
    getSavedOrderById: queuer(tda.savedorders.getSavedOrderByIdm),
    getSavedOrders: queuer(tda.savedorders.getSavedOrdersm),
    replaceSavedOrder: queuer(tda.savedorders.replaceSavedOrderm),
  },
  transactions: {
    getTransaction: queuer(tda.transactions.getTransaction),
    getTransactions: queuer(tda.transactions.getTransactions),
  },
  userinfo: {
    getUserPreferences: queuer(tda.userinfo.getUserPreferences),
    getStreamerSubKeys: queuer(tda.userinfo.getStreamerSubKeys),
    getUserPrincipals: queuer(tda.userinfo.getUserPrincipals),
    updateUserPreferences: queuer(tda.userinfo.updateUserPreference)s
  },
  watchlists: {
    createWatchlist: queuer(tda.watchlists.createWatchlist),
    deleteWatchlist: queuer(tda.watchlists.deleteWatchlist),
    getWatchlist: queuer(tda.watchlists.getWatchlist),
    getWatchlistsSingleAcct: queuer(tda.watchlists.getWatchlistsSingleAcct),
    getWatchlistsMultiAcct: queuer(tda.watchlists.getWatchlistsMultiAcct),
    replaceWatchlist: queuer(tda.watchlists.replaceWatchlist),
    updateWatchlist: queuer(tda.watchlists.updateWatchlist),
  }
}

module.exports = tdaIndex
