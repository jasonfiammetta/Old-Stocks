import random

MAX_STOCK_NUM = 10
GRID_SIZE = 1 # len(stock_list)

class Grid:
    """
    An N-dimensional grid, with each location representing a number of stocks owned
    """
    def __init__(self, stock_list, bots, update, time = 0):
        # print(stock_list)
        self.grid_prices = list(map(lambda x: x['price'], stock_list))
        self.bots = bots
        self.time = time
        self.update = update

    @staticmethod
    def get_origin():
        return [0] * GRID_SIZE

    @staticmethod
    def get_random_loc():
        return [random.randint(-MAX_STOCK_NUM, MAX_STOCK_NUM) for x in range(GRID_SIZE)]

    def calc_spot(self, loc):
        sum = 0
        print('calc_spot', self.grid_prices, loc)
        for i in range(GRID_SIZE):
            sum += self.grid_prices[i] * loc[i]
        return sum
    
    def update_stocks(self):
        stock_list = self.update(self.time)
        self.grid_prices = list(map(lambda x: x['price'], stock_list))

    def step(self):
        self.time += 1
        for bot in self.bots:
            bot.act(self.grid_prices)
        
        self.update_stocks()

        for bot in self.bots:
            value = self.calc_spot(bot.loc)
            bot.live(value)

    def move(self, bot, new_loc):
        cost = self.calc_cost(bot.loc, new_loc)

    def stats(self):
        return [bot.stats() for bot in self.bots]
