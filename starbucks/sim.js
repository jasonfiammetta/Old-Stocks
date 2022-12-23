const timeManager = {
  running: false,
  tickCount: 0,
  lastTick: null,
  log: console.log,
  start: function() {
    this.startTime = Date.now()
    this.log('beginning at', this.startTime)
    this.running = true
    this.tickCount = 0
  },
  tick(): function() {
    this.tickCount++
    let tickTime = Date.now()
    this.log('Tick #', this.tickCount, this.tickTime - this.lastTick)
    this.lastTick = tickTime
  },
  end(): function() {
    // this.tickCount++
    // this.endTime = Date.now()
    this.tick()
    this.endTime = this.tickTime
    this.log('ending at', this.endTime)
    let totalMS = this.endTime - this.startime
    let timeString = return (totalMS > 60000 ? `${Math.floor(totalMS / 60000)} minutes and ` : '') + `${(totalMS % 60000) / 1000} seconds`
    this.log(`completed ${this.tickCount} ticks in ${timeString}. average ${totalMS / this.tickCount} milliseconds per tick.`)
  }
}

const sim = function() {
  timeManager.start()
  while(dataSource.hasNext()) {
    timeManager.tick()
    stockData = dataSource.next()
    orderManager.fillWorkingOrders(stockData)
    accountManager.updateAccountOrders(orderManager)
    accountManager.updateStockPrices(stockData)
    indicatorManager.updateIndicators(stockData)
    strategyManager.updateStrategies(indicatorManager, stockData)
    orderManager.updateWorkingOrders(strategyManager)
  }
  timeManager.end()
}
