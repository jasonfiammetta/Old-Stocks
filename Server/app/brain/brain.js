const cron = require('node-cron')
const tda = require('../tda.js')
const { getAccountId } = require('../../config/tda_config.js')
const observers = require('../startup/observers.js')

const outstandingOrders = {}

const think = function(thoughts) {
  // do all the things
  console.log('considering ', new Date().toLocaleTimeString('en-US'), thoughts.stockList)
  const { stockList, services } = thoughts
  // let services = ['bidPrice', 'askPrice']
  tda.quotes.getQuotes({
    accountId: getAccountId(),
    symbol: stockList.join(','),
  })
    .then(quotes => {
      let values = []
      Object.values(quotes).forEach(quote => {
        // console.log(quote)
        values.push(`${quote.symbol}: ${services.map(s => quote[s]).join(', ')}\n${JSON.stringify(quote)}`)
        // ${quote.bidPrice}, ${quote.askPrice}`)
      })
      return values
    })
    .then(values => observers.send(values))
    .catch(err => { console.error(err) })

  // check outstanding orders
  if(outstandingOrders.length) {
    // tda.orders.getOrdersBy //Query? Account?
    // (accountId, orders.WORKING)
    //   .then(workingOrders => {
    //   for(let order in workingOrders) {
    //     outstandingOrders[order.id] = order.status
    //   }
    // })
  }
  // evaluate current positions
  // - profit/loss
  // - time in position
  // - efficiency, function of position size, p/l, time

  // look for new positions

  // compare current ideas with ones that could be better tradeoffs


}


module.exports = {
  start: function(thoughts) {
    //setup
    if(thoughts && thoughts.stockList) {
      // add stocks of interest
      // thoughts.stockList.forEach(stock => {
      //   // sub.push(stock)
      //   getQuote(stock)
      //
      // })
      // getQuotes(thoughts.stockList.join(','))
    }

    // begin think loop
    const thinking = cron.schedule('*/5 * * * * *', () => think(thoughts))

  }
}
