from genes import Genes
from grid import Grid


COST_OF_LIVING = 1 # Money drain
DEATH_THRESHOLD = 100

class Bot:
    def __init__(self, loc = None):
        self.genes = Genes() # seed?
        self.loc = loc or Grid.get_random_loc()
        self.life = 1000 # money
        self.age = 0

    def act(self):
        # do nothing 
        # or
        # move to new location
        # genes decide
        pass

    def live(self, gain):
        self.life -= COST_OF_LIVING
        self.life += gain
        self.age += 1
        if self.life < DEATH_THRESHOLD:
            self.die()

    def give_back_money(self):
        pass

    def die(self):
        print('dead', self.stats())
        self.give_back_money()

    def stats(self):
        return {
            'age': self.age,
            'genes': self.genes,
            'location': self.loc,
            'life': self.life
        }
