export default class strategy {
  constructor(id, stockList, cash, metrics) {
    this.id = id
    this.stock = stockList
    this.cash = cash // let accountant worry about cash?

    this.metrics = metrics || {}
    // this.momentum = generateMomentum(this.stock) // move to setup?
    // this.caution = 1
    // this.riskTolerance = 1
    this.orders = []
    this.portfolio = {}
  }

  // Setup. Calculate current momentum, other metrics, etc.
  setup() {
    this.metrics = {
      momentum = 0 // calculateMomentum(dataSource),
      buySignal = {},
      sellSignal = {},
      idealShares = 0
    }
    decideOrders(this.metrics)
  }

  // Consume data point. Decide buy sell or hold.
  consume(data) {
    this.updateMetrics(data)
    // if(metrics.buySignal.timeToBuy) { return buyAction(metrics.limitPrice)} // this is messy, just have metrics output an array of orders
    this.decideOrders(this.metrics)
    return this.orders
  }

  getOrders() {
    return this.orders
  }

  updateMetrics(data) {
    this.metrics.data.push(data) // update averages? whatever other stuff
  }

  decideOrders(metrics) {
    if(metrics.movingAverage() > 20) {}
  }
}
