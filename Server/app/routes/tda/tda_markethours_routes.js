const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/markethours', (req, res, next) => {
  res.send('Mildly Important TODO. \nCould be important for scheduling automatic dates, but we\'re clearly not there yet. \nFor now I fully intend to start and stop the server every day that I want it to trade. \nAlso, maybe I could just do this to get the full calendar for the year? Find out how far in advance this goes, and if session days ever get canceled or something. \nElse, just test everyday at 8 am if there is a session for the day.')
})

router.get('/markethours/options', (req, res, next) => {
  console.log('body: ', req.body)
  console.log('query: ', req.query)
  if(req.body && req.body.hours) {
    tda.markethours.getSingleMarketHours(req.body.hours)
    .then(hours => res.json({ hours: hours}))
    .catch(next)
  } else if(req.query && req.query.hours) {
    tda.markethours.getSingleMarketHours(req.query)
    .then(hours => res.json({ hours: hours}))
    .catch(next)
  } else {
    res.json({ nope: 'nope' })
  }
})

module.exports = router
