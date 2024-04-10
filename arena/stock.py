

class Stock:
    def __init__(self, name, initial_price, grid = None):
        self.name = name
        self.price = initial_price

        if grid:
            self.register(grid)

    def register(self, grid):
        grid.add_stock(self)

    def update(self, new_price):
        self.price = new_price

class StockList:
    def __init__(self):
        self.stocks = []
        # self.prices = []

    def add_stock(self, stock):
        self.stocks.append(stock)
        # self.prices.append(stock.price)

    def update(self, data):
        for stock in self.stocks:
            stock.update(data[stock.name])