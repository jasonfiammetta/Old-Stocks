const tda = require("tda");

class TDAPortfolio {
  constructor() {
    this.portfolio = {};
  }

  async getPortfolio() {
    const p = await tda.account.getPortfolio();
    const diff = this.comparePortfolios(p);
    this.reportDifference(diff);
    this.portfolio = p;
  }

  comparePortfolios(portfolio) {
    return this.portfolio.stockList.map((stock) => {
      return {
        stock: this.portfolio[stock] - portfolio[stock],
      };
    });
  }

  reportDifference(diff) {
    console.log(diff);
  }
}
