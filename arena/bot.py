from genes import Genes
from grid import Grid


COST_OF_LIVING = 1 # Money drain
DEATH_THRESHOLD = 100

class Bot:
    def __init__(self, name, loc = None):
        self.name = name
        self.genes = Genes() # seed?
        # self.loc = loc or Grid.get_random_loc()
        # self.loc = loc or Grid.get_origin()
        self.loc = loc or Grid.get_origin() if name % 2 else Grid.get_random_loc()
        self.life = 10000 # money
        self.liquid = self.life
        self.age = 0
        self.alive = True

        self.buy_or_sell(500.00, self.loc[0]) # Testing

    def act(self, grid_prices):
        # do nothing 
        # or
        # move to new location (buy_or_sell)
        # genes decide
        pass

    def buy_or_sell(self, stock_price, quantity):
        self.liquid -= stock_price * quantity
        # self.life -= TRANSACTION_FEE

    def live(self, gain):
        self.liquid -= COST_OF_LIVING
        self.life = gain + self.liquid
        self.age += 1
        if self.life < DEATH_THRESHOLD:
            self.die()

    def give_back_money(self):
        # liquidate holdings and free cash
        pass

    def die(self):
        print('dead', self.stats())
        self.alive = False
        self.give_back_money()

    def stats(self):
        return {
            'age': self.age,
            'genes': self.genes,
            'location': self.loc,
            'life': self.life,
            'alive': self.alive,
        }
