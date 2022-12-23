const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/movers', (req, res, next) => {
  res.send('Not Important TODO, probably. \nThere\'s got to be a better way of scanning, right?')
})

module.exports = router
