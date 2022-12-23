const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/authentication', (req, res, next) => {
  res.send('Important TODO')
})

module.exports = router
