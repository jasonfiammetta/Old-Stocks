from bank import Bank
from grid import Grid
from bot import Bot

csv = '.csv'
stock_list = [] # derive from csv
stocks = 11 # len(stockList)

bot_num = 2 # 1000
bots = []
stock_list = [[{ "name": 'SPY',  "price": 500.00 }], [{ "name": 'SPY',  "price": 501.00 }]]
initial_money = 10000

for i in range(bot_num):
    bots.append(Bot(i))

bank = Bank(initial_money, bots)
grid = Grid(stock_list[0], bots, (lambda time: stock_list[time]))

print (grid.stats())

grid.step()

print(grid.stats())