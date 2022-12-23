const logger = require('../brain/logger/logger.js')

const observerList = []

let serverObserver = {
  id: 0,
  send: function(msg) { console.log(msg) }
}
let loggerObserver = {
  id: 1,
  send: function(msg) {
    logger.push(msg)
  }
}

// if(verbose)
observerList.push(serverObserver)
observerList.push(loggerObserver)

const observers = {
  send: function(msg) {
    observerList.forEach(observer => observer.send(msg))
  },
  addObserver: function(observer) {
    if(observer && observer.send){
      let id = Math.ceil(Math.random()*997 + 2)
      // should check for repeat ids
      console.log("Adding new observer with id:", id)
      observer.id = id
      observerList.push(observer)
    }
  },
  removeObserver: function(observerId) {
    observerList.splice(observerList.map(o => o.id).indexOf(observerId), 1)
  }
}

module.exports = observers
