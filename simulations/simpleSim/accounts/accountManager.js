class AccountManager {
  constructor() {
    this.portfolio = {};
  }

  updateAccountOrders(orderManager) {
    orderManager.filledOrders.forEach((order) => {
      this.portfolio[order.stock];
    });
  }

  updateStockPrices(stockData) {}
}

module.exports = AccountManager;
