const ws = require('ws')

const startWSS = function () {
  const wss = new ws.Server({ noServer: true })
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('message received:', message) // id? time?

    })
    console.log('client connected')
    ws.send('connected to websocket server')
  })
  return wss
}
