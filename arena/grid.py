
class Grid:
    def __init__(self, stock_list, bots):
        self.grid_size = len(stock_list)
        self.grid = stock_list.map(lambda x: x.price)
        self.bots = bots
        self.time = 0

    def calc_spot(self, loc):
        sum = 0
        for stock in loc:
            sum += stock.price
        return sum

    def step(self):
        self.time += 1
        for bot in bots:
            bot.worth = calc_spot(bot.loc)
            bot.live()

    def move(self, bot, new_loc):
        cost = calc_cost(bot.loc, new_loc)


class Location:
    def __init__(self, )
