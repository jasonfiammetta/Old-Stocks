import { TimeManager } from "./timer"
import DataSource from "./data/dataSource"
import { fakeData } from "./data/fakeData"

const timeManager = new TimeManager()
const dataSource = new DataSource(fakeData)

const sim = function() {
  timeManager.start()
  while(dataSource.hasNext()) { // hasNext or isLive?
    timeManager.tick()
    stockData = dataSource.next()
    // orderManager.fillWorkingOrders(stockData)
    accountManager.updateAccountOrders(orderManager)
    accountManager.updateStockPrices(stockData)
    indicatorManager.updateIndicators(stockData)
    strategyManager.updateStrategies(indicatorManager, stockData)
    orderManager.updateWorkingOrders(strategyManager)
  }
  timeManager.end()
}

/*

datasource
live data coming in from websocket
live data coming in from timed get requests (every minute, eg)
fake data always available


account checker
check working orders  <------ get updated by TDA, the market, sim (don't forget order slippage, bad fills, etc)
update orders with changed statuses
update latest price on tracked stocks // necessary? can't anything that wants to know this just look at current index? 
                                      // current index might not have info for stock


brain
indicators, strategies
spit out new orders

order builder/tracker/sender
combine orders from different strategies
send out new combined orders


performance tracker
monitor networth/current portfolio/cash in bank/reserved/on margin requirement



*/