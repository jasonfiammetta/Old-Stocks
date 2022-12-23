const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/watchlists', (req, res, next) => {
  res.send('Not Important TODO, probably? I feel like I\'d rather just use javascript arrays of symbols')
})

module.exports = router
