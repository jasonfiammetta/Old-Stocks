/*
A whole new protocol, oh boy.

*/

const getStreamerSubKeys = require

const createStream = function(target, owner) {
  let ws = new WebSocket(target)
  ws.onopen = () => {
    console.log('websocket opened')
  }

  ws.onmessage = (message) => {
    console.log(message)
    owner.receive(message)
  }

  ws.onclose = () => {
    console.log('websocket closed')
    owner.notifyClosed(ws)
  }

  return ws
}

module.exports = {
  createStream
}
