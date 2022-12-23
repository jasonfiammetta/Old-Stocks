const fs = require('fs')

let date = new Date().toLocaleDateString('en-US', {dateStyle: 'medium'}).replaceAll(/(, | )/g,'-')
let stream = fs.createWriteStream(`tmp/${date}.txt`, { flags: 'a' })

let push = function(msg) {
  stream.write(`${new Date().toLocaleTimeString()}: ${msg}\n`)
}

const logger = {
  push,
}

module.exports = logger
