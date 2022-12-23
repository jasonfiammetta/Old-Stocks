const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// const tdaRoutes = require('./app/routes/tda_routes.js')
const startup = require('./app/startup/routes.js')
const tdaSetup = require('./app/startup/tda_setup.js')
const requestLogger = require('./lib/request_logger.js')

const config = require('./config/server_config.js')
const port = config.port || 3000
const clientPort = config.clientPort

const app = express()

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientPort}` }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(requestLogger)

// app.use(tdaRoutes)
startup(app)
tdaSetup()

// const testTdaInterval = require('./lib/testTdaInterval.js')
// const test = testTdaInterval()

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`)
})

// websocket stuff

// begin brain
const brain = require('./app/brain/brain.js')
const thinking = {
	// stockList: ['SPY', 'AAPL', 'MSFT', 'TSLA'],
	stockList: ['SPY'],
	// services?
	// services: ['QUOTE']
	services: ['bidPrice', 'askPrice']
	// risk level?
	// long only? long and short?
}
console.log(new Date().toLocaleTimeString(), 'beginning brain')
brain.start(thinking)
