const tda = require("tda-api-client");

class StockHistory {
  constructor(stockList, startDate, endDate) {
    this.stockList = stockList;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  async getAllData() {
    data = {};
    promises = [];
    for (stock of stockList) {
      promises.push(this.getStockDataPromise(stock));
    }
    await Promise.all(promises);
    return data;
  }

  async getStockDataPromise(stock) {
    const config = {
      symbol: stock,
      periodType,
      period,
      frequency,
      frequencyType,
      startDate,
      endDate,
      needExtendedHoursData,
    };
    tda.getPriceHistory(config);
  }
}

module.exports = StockHistory;
