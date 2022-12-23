const express = require('express')
const router = express.Router()

const cron = require('node-cron')

const jobs = {}

const createJob = (jobID, seconds, task) => {
  let job = cron.schedule(`*/${seconds} * * * * *`, task)
  jobs[jobID] = job
}

router.get('/jobs', (req, res, next) => {
  let length = Object.keys(jobs).length
  res.json({
    jobNumber: `${length} job${ length == 1 ? '' : 's'} scheduled`,
    jobs: jobs
  })
})

router.get('/jobs/:id', (req, res, next) => {
  let id = req.params.id
  res.json({ job: jobs[id]})
})

router.post('/jobs', (req, res, next) => {
  // create job from req.body?
  res.send('<p>Job not created, still implementing</p>')
})

// router.patch(/'jobs/:id', ) TODO to pause and unpause jobs

router.delete('/jobs/:id', (req, res, next) => {
  let id = req.params.id
  if(jobs[id]) {
    jobs[id].destroy()
    return res.status(204).send('<p>Job deleted</p>')
  }
  res.status(404).send('<p>Job not found, not deleted</p>')
})

// put these be in their own file, these were examples to test node-cron
const symbolList = []
const symbolPrices = {}

router.get('/track/:symbol', (req, res, next) => {
  let symbol = req.params.symbol
  if(symbolList.includes(symbol)) {
    res.json({ prices: symbolPrices[symbol] })
  } else {
    symbolList.push(symbol)
    symbolPrices[symbol] = []
    createJob(symbol, 5, () => {
      // api call would go here
      let nextPrice = Math.random()
      symbolPrices[symbol].push(nextPrice)
      console.log(`${symbol} next price: ${nextPrice}`)
    })
    res.send('<p>Job created</p>')
  }
})

router.get('/stop-track/:symbol', (req, res, next) => {
  let symbol = req.params.symbol
  jobs[symbol].stop()
})

router.get('/stop-track-all', (req, res, next) => {
  Object.keys(jobs).forEach(j => jobs[j].stop())
  res.send('All jobs stopped')
})

module.exports = router
