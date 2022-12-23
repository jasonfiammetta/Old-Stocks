const TimeManager = require("./time/timeManager.js");
// const StockHistory = require("./data/stockHistory.js");
const OrderManager = require("./orders/orderManager.js");
const AccountManager = require("./accounts/accountManager.js");

// historical config
const stockList = ["SPY", "TSLA", "MSFT"];
const startDate = new Date(2021, 0, 1);
const endDate = new Date(2022, 0, 1);

// const dataSource =
const timeManager = new TimeManager();
const orderManager = new OrderManager();

const sim = function (dataSource) {
  timeManager.start();
  while (dataSource.hasNext()) {
    timeManager.tick();
    stockData = dataSource.next();
    orderManager.fillWorkingOrders(stockData);
    accountManager.updateAccountOrders(orderManager);
    accountManager.updateStockPrices(stockData);
    indicatorManager.updateIndicators(stockData);
    strategyManager.updateStrategies(indicatorManager, stockData);
    orderManager.updateWorkingOrders(strategyManager.getNewOrders);
  }
  timeManager.end();
};

// tda.getsomehistoricaldata().then((data) => sim(sourcify(data)));
historicalData = new StockHistory(stockList, startDate, endDate);
data = await historicalData.getAllData();
const dataSource = new DataSource(data);

sim(dataSource);
