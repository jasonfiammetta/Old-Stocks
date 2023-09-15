const tda = require('tda-api-client')
const investments = require('./currentInvestments.json')

function equityDesc(equity) {
  let plus = equity.netChange > 0 ? '+' : ''
  let dividend = ''
  if(equity.divDate) { dividend = `\nDIVIDEND: date: ${equity.divDate} amount: ${equity.divAmount} yield: ${equity.divYield}\nRECOMMENDED: CHECK NEW QUANTITY OF HOLDINGS`}
  return `${equity.symbol}: ${equity.assetType}. ${equity.description}.\nLast close price:\t${equity.closePrice}\t${plus}${equity.netChange}\t${plus}${equity.netPercentChangeInDouble}${dividend}`
}

// "TotalInvestments": {
//   "VTTSX": 244.645,
//   "VFIAX": 43.628,
//   "VMGRX": 236.411,
//   "VWINX": 125.203
// },

function evaluateFund(fund, currentPrices) {
  let totalWorth = 0
  Object.keys(fund).forEach(ticker => {
    let p = currentPrices[ticker]
    let q = fund[ticker]
    let worth = p * q
    totalWorth += worth
    console.log(`\t${ticker}: price: ${p}, quantity: ${q}, worth: ${worth.toFixed(2)}`)
    // might need to round, Math.round(), Number.toFixed(2) returns string
  })
  console.log(`\tTotal Value of Fund: ${totalWorth.toFixed(2)}`)
  return totalWorth
}

tda.accounts.getAccounts({ fields: 'positions,orders' })
  .then(accounts => {
    // set config id to first accountId
    // consider adding more control if you ever get more accounts
    // console.log(accounts)
    console.log('Got account: ', accounts[0].securitiesAccount.accountId)
    return accounts[0].securitiesAccount.accountId
  })
  .then(accountId => {
    tda.quotes.getQuotes({ accountId: accountId, symbol: investments.Investments.join(',') })
      .then(quotes => {
        // console.log('quotes:', quotes)
        const fundPrices = {}
        Object.keys(quotes).forEach(fund => {
          console.log(equityDesc(quotes[fund]))
          fundPrices[fund] = quotes[fund].closePrice
          // if(fund.dividend dates were recent or are coming up) {
          //   calculate reinvestment and add to quantities
          //   console.log('Suggestion: Check quantities for investments. Possible new total:')
          //   console.log(${fund.name}: ${fundPrices[fund.name]} + dividendTotal/price`))
          // }
        })
        // console.log('Fund Prices:', fundPrices)
        return fundPrices
      })
      .then(currentPrices => {
        Object.keys(investments.Quantities).forEach(fund => {
          console.log(fund)
          evaluateFund(investments.Quantities[fund], currentPrices)
        })
      })
      .catch(console.error)
  })
  .catch(e => {
    console.error("Error: could not get account. ", e)
  })
