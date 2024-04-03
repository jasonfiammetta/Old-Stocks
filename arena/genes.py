import random

GENE_LENGTH = 20
ALPHABET = 'bshdci' # buy sell hold difference calc indicator

class Genes:
    def __init__(self, parent_1 = None, parent_2 = None):
        if parent_1 and parent_2:
            self.gene = self.combine(parent_1, parent_2)
        else:
            self.gene = self.random_string()


    def combine(self, parent_1, parent_2):
        split = random.randInt(1, GENE_LENGTH - 1)
        return parent_1[:split] + parent_2[split:]

    def random_string(self):
        return ''.join([random.choice(ALPHABET) for _ in range(GENE_LENGTH)])
