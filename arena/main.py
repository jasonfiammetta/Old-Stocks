from bank import Bank
from grid import Grid
from bot import Bot

csv = '.csv'
stock_list = [] # derive from csv
stocks = 11 # len(stockList)

bot_num = 1 # 1000
bots = []
stock_list = [{ "name": 'SPY',  "price": 500.00 }]
initial_money = 10000

for i in range(bot_num):
    bots.append(Bot())

bank = Bank(initial_money, bots)
grid = Grid(stock_list, bots)

print (grid.stats())

grid.step()

print(grid.stats())