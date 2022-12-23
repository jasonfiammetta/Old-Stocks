
COST_OF_LIVING = 1 # Money drain

class Bot:
    def __init__(self, loc):
        self.genes = new Genes() # seed?
        self.loc = loc
        self.life = 1000 # money
        self.age = 0

    def act(self):
        # do nothing
        # move to new location

    def live(self, gain):
        self.life -= COST_OF_LIVING
        self.life += gain
        self.age += 1
        if self.life < DEATH_THRESHOLD:
            self.die()

    def die(self):
        print(self.stats())
        give_back_money()

    def stats():
        return dict(
            self.age,
            self.genes,
            self.loc,
            self.life
        )
