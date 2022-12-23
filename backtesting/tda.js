const tda = require('tda-api-client')

const tdaIndex = {
  accounts: {
    getAccount: tda.accounts.getAccount,
    getAccounts: tda.accounts.getAccounts
  },
  authentication: {
    getAuthentication: tda.authentication.getAuthentication,
    refreshAuthentication: tda.authentication.refreshAuthentication,
  },
  instruments: {
    getInstrument: tda.instruments.getInstrument, // **
    searchInstrument: tda.instruments.searchInstrument, // **
  },
  markethours: {
    getSingleMarketHours: tda.markethours.getSingleMarketHours, // **
    getMultipleMarketHours: tda.markethours.getMultipleMarketHours, // **
  },
  movers: {
    getMovers: tda.movers.getMovers // **
  },
  optionchain: {
    getOptionChain: tda.optionchain.getOptionChain // **
  },
  orders: {
    placeOrder: tda.orders.placeOrder,
    replaceOrder: tda.orders.replaceOrder,
    cancelOrder: tda.orders.cancelOrder,
    getOrder: tda.orders.getOrder,
    getOrdersByAccount: tda.orders.getOrdersByAccount,
    getOrdersByQuery: tda.orders.getOrdersByQuery,
  },
  pricehistory: {
    getPriceHistory: tda.pricehistory.getPriceHistory // **
  },
  quotes: {
    getQuote: tda.quotes.getQuote, // **
    getQuotes: tda.quotes.getQuotes // **
  },
  savedorders: {
    createSavedOrder: tda.savedorders.createdSavedOrderm,
    deleteSavedOrder: tda.savedorders.deleteSavedOrderm,
    getSavedOrderById: tda.savedorders.getSavedOrderByIdm,
    getSavedOrders: tda.savedorders.getSavedOrdersm,
    replaceSavedOrder: tda.savedorders.replaceSavedOrderm,
  },
  transactions: {
    getTransaction: tda.transactions.getTransaction,
    getTransactions: tda.transactions.getTransactions,
  },
  userinfo: {
    getUserPreferences: tda.userinfo.getUserPreferences,
    getStreamerSubKeys: tda.userinfo.getStreamerSubKeys,
    getUserPrincipals: tda.userinfo.getUserPrincipals,
    updateUserPreferences: tda.userinfo.updateUserPreferences
  },
  watchlists: {
    createWatchlist: tda.watchlists.createWatchlist,
    deleteWatchlist: tda.watchlists.deleteWatchlist,
    getWatchlist: tda.watchlists.getWatchlist,
    getWatchlistsSingleAcct: tda.watchlists.getWatchlistsSingleAcct,
    getWatchlistsMultiAcct: tda.watchlists.getWatchlistsMultiAcct,
    replaceWatchlist: tda.watchlists.replaceWatchlist,
    updateWatchlist: tda.watchlists.updateWatchlist,
  }
}

module.exports = tdaIndex
