const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/optionchain', (req, res, next) => {
  res.send('Mildly Important TODO')
})

module.exports = router
