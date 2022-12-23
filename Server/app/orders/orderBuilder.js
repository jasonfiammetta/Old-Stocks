// build order objects

let buildOrder = function(instrument, quantity, options) {
  if(!instrument || !quantity) {
    throw 'Order must have an instrument and a non-zero quantity.'
  }
  let order = {
    session: options.session || 'NORMAL',
    duration: options.duration || 'DAY',
    orderType: options.orderType || 'MARKET', // is default market a good idea?
    // complexOrderStrategyType: options.complexOrderStrategyType || 'NONE', // might be unnnecessary, might only refer to options
    // quantity: quantity, // apparently this goes in orderLegCollection
    // skip filledQuantity and remainingQuantity
    // requestedDestination: options.requestedDestination || 'AUTO' // this should be optional
    // skip releaseTime
    orderStrategyType: 'SINGLE',
    orderLegCollection: [
      {
        instruction: quantity > 0 ? 'BUY' : 'SELL',
        instrument: {
          assetType: 'EQUITY',
          symbol: instrument,
        },
        quantity: Math.abs(quantity)
      }
    ]
  }

  // orderType
  if (options.orderType == 'LIMIT') {
    if(!options.price) { throw 'Limit order must have a price.' }
    order.price = options.price
  }
  if (options.orderType == 'STOP') {
    if(!options.stopPrice) { throw 'Stop order must have a stop price.'}
    order.stopPrice = options.stopPrice
    order.stopType = options.stopType || 'MARK'
  }
  // Include STOP_LIMIT or TRAILING_STOP or TRAILING_STOP_LIMIT?

  // likely unnecessary
  if (options.cancelTime) {
    order.cancelTime = options.cancelTime
  }
  if (options.taxLotMethod) {
    order.taxLotMethod = options.taxLotMethod
  }

  return order
}

let addChildOrder = function(parentOrder, complexStrategyType, childOrders) {
  parentOrder.complexOrderStrategyType = complexStrategyType // 'TRIGGER' or 'OCO'
  parentOrder.childOrderStrategies = [childOrders[0], childOrders[1]] // childOrders
}

// might need an orderReceiver too, check if an order has been received and/or field
// status check

module.exports = buildOrder
