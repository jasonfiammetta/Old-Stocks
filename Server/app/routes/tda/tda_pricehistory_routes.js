const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/pricehistory', (req, res, next) => {
  res.send('Mildly Important TODO? Maybe?')
})

module.exports = router
