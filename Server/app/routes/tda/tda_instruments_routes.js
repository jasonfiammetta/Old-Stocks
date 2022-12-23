const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/instruments', (req, res, next) => {
  res.send('Important TODO, I think?')
})

module.exports = router
