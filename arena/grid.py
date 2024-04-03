import random

MAX_STOCK_NUM = 10

class Grid:
    """
    An N-dimensional grid, with each location representing a number of stocks owned
    """
    def __init__(self, stock_list, bots):
        self.grid_size = len(stock_list)
        self.grid_prices = stock_list.map(lambda x: x.price)
        self.bots = bots
        self.time = 0

    def get_origin(self):
        return [0] * self.grid_size

    def get_random_loc(self):
        for i in range(self.grid_size):
            random.randint(-MAX_STOCK_NUM, MAX_STOCK_NUM)

    def calc_spot(self, loc):
        sum = 0
        for i in range(self.grid_size):
            sum += self.grid_size[i] * loc[i]
        return sum

    def step(self):
        self.time += 1
        for bot in self.bots:
            bot.worth = self.calc_spot(bot.loc)
            bot.live()

    def move(self, bot, new_loc):
        cost = self.calc_cost(bot.loc, new_loc)
