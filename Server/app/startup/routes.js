const express = require('express')

const tdaAccountsRoutes = require('../routes/tda/tda_accounts_routes.js')
const tdaAuthenticationRoutes = require('../routes/tda/tda_authentication_routes.js')
const tdaInstrumentsRoutes = require('../routes/tda/tda_instruments_routes.js')
const tdaMarkethoursRoutes = require('../routes/tda/tda_markethours_routes.js')
const tdaMoversRoutes = require('../routes/tda/tda_movers_routes.js')
const tdaOptionchainRoutes = require('../routes/tda/tda_optionchain_routes.js')
const tdaOrdersRoutes = require('../routes/tda/tda_orders_routes.js')
const tdaPricehistoryRoutes = require('../routes/tda/tda_pricehistory_routes.js')
const tdaQuotesRoutes = require('../routes/tda/tda_quotes_routes.js')
const tdaSavedordersRoutes = require('../routes/tda/tda_savedorders_routes.js')
const tdaTransactionsRoutes = require('../routes/tda/tda_transactions_routes.js')
const tdaUserinfoRoutes = require('../routes/tda/tda_userinfo_routes.js')
const tdaWatchlistsRoutes = require('../routes/tda/tda_watchlists_routes.js')

// const intervalRoutes = require('../routes/begin/intervals.js')
const schedulerRoutes = require('../routes/begin/scheduler.js')

module.exports = function (app) {
  //app.use(routes)
  app.use(tdaAccountsRoutes)
  app.use(tdaAuthenticationRoutes)
  app.use(tdaInstrumentsRoutes)
  app.use(tdaMarkethoursRoutes)
  app.use(tdaMoversRoutes)
  app.use(tdaOptionchainRoutes)
  app.use(tdaOrdersRoutes)
  app.use(tdaPricehistoryRoutes)
  app.use(tdaQuotesRoutes)
  app.use(tdaSavedordersRoutes)
  app.use(tdaTransactionsRoutes)
  app.use(tdaUserinfoRoutes)
  app.use(tdaWatchlistsRoutes)

  // app.use(intervalRoutes)
  app.use(schedulerRoutes)

  // database stuff too?
}
