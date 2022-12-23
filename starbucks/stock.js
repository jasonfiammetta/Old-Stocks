const tda = require('tda-api-client')

class Stock {
  constructor(name) {
    this.initial = tda.instruments.getInstrument(name) //instrument? quote?
    this.observerList = []
  }

  update(data) {
    const [ markPrice, lastPrice, volume ] = data
    this.markPrice = markPrice
    this.lastPrice = lastPrice
    this.volume = volume
    updateObservers({ markPrice, lastPrice, volume })
  }

  addObserver(observer) {
    observer.id = this.observerList.length
    this.observerList.push(observer)
  }

  removeObserver(observerId) {
    this.observerList[observerId] = null
  }

  updateObservers(data) {
    this.observerList.forEach(obs => {
      if(obs) { obs.send(data) } // let observers specify what data they want?
    })
  }

}

export default Stock
