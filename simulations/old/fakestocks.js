const {Generator} = require('./generator')

function FakeStock(symbol, source) {
  this.symbol = symbol
  this.source = source || new Generator()
  this.prices = []
  this.vols = []

  this.tick = function() {
    this.prices.push(this.source.next())
  }
}

// const apple = {
//   symbol: "AAPL",
//
// }

module.exports = {
  FakeStock,
}
