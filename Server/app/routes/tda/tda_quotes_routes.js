const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')
const { getAccountId } = require('../../../config/tda_config.js')

router.get('/quotes/s/:symbol', (req, res, next) => {
  tda.quotes.getQuote({ accountId: getAccountId(), symbol: req.params.symbol })
    .then(quote => {
      res.json({ quote: quote })
    })
    .catch(next)
})

// symbols using a comma-separated string, e.g. F,GM,TSLA
router.get('/quotes', (req, res, next) => {
  tda.quotes.getQuotes({ accountId: getAccountId(), symbol: req.query.symbols})
    .then(quotes => {
      // process the quotes at all?
      res.json({ quotes: quotes })
    })
    .catch(next)
})


module.exports = router
