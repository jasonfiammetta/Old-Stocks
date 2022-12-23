const express = require('express')
const router = express.Router()

const cron = require('node-cron')
const tda = require('../../tda')

// const displaySymbols = require('./displaySymbols.js')

// let stocks = []
// let timers = []
// let ids = 0

const stockTimers = {
  stocks: [],
  timers: [],
  pause: function(timer) {
    if(!timer.running) {
      timer.timer = setInterval(timer.cb, timer.delta)
      timer.running = true
    }
    else {
      clearInterval(timer)
      timer.running = false
    }
  },
  resume: function(timer) {
    timer =
    timer.running = true
  }
}

// {
//   symbol: 'symbol',
//   delta: 5000,
//   timer: null,
//   startTime: null,
//   endTime: null,
//   n: 0,
//   running: false,
//   cb: () => { console.log(displaySymbols([this.symbol]))},
//   pause: () => {
//     if(!this.running) {
//       this.timer = setInterval(this.cb, this.delta)
//       this.running = true
//     }
//     else {
//       clearInterval(this.timer)
//       this.running = false
//     }
//   }
// }

let createTimer = (t, symbol, endTime) => {
  // const id = ids++
  let st = {
    n = 0,
    symbol = symbol,
    delta = t,
    // cb = function() {,
    //   // console.log('Timer ' + id)
    //   console.log(displaySymbols([symbol]))
    //   this.n++
    //   console.log(this.n, ', ', this.n * this.delta)
    // }
    startTime = Date.now(),
    timer = setInterval(cb, delta),
    running = true,
    pause = pause, // bind/apply?,
    endTime = endTime || null,
    // stocks.push(symbol)
    // timers.push({id, timer, n})
  }
  stockTimers[symbol] = st
  stockTimers.stocks.push(symbol)
  const cb = function() {,
    // console.log('Timer ' + id)
    console.log(displaySymbols([symbol]))
    this.n++
    console.log(this.n, ', ', this.n * this.delta)
  }
}

router.post('/start', (req, res, next) => {
  let t = req.body.milliseconds
  timer = setInterval(function() {
    console.log(displaySymbols(req.body.symbols))
    // tda.quotes.getQuotes(req.body.symbols)
    n++
    console.log(n, ', ', n*t)
  }, t)
})

router.get('/start/:symbol', (req, res, next) => {
  // let t = req.body.milliseconds
  let symbol = req.params.symbol
  if(stockTimers.stocks.includes(symbol)) {
    stockTimers[symbol].running ? res.status(200).send('timer is already running on ', symbol) : stockTimers[symbol].pause()
    res.status(200).send('restarting timer on ', symbol)
  }
  let t = 5000
  createTimer(t, symbol)
  res.status(200).send('Started a timer on ', symbol)
})

// router.post('/start/:symbol', (req, res, next) => {}) // Start individual timers for each symbol?

router.post('/stop', (req, res, next) => {
  clearInterval(timer)
  next()
})

router.get('/stop/:symbol', (req, res, next) => {
  let symbol = req.params.symbol
  let msg = 'timer '
  // is symbol already tracked
  if(stockTimers.stocks.includes(symbol)) {
    stockTimers[symbol].running ? stockTimers[symbol].pause() : res.status(200).send('timer already stopped on ', symbol)
  } else {
    msg += 'started on ' + symbol
  }
  res.status(200).send(msg, symbol)
})

router.get('/stopall', (req, res, next) => {
  timers.forEach(t => clearInterval(t.timer))
})

module.exports = router
