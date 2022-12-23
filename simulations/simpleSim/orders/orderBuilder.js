const ORDER_STATUS = {
  SENDING: 'SENDING',
  WORKING: 'WORKING',
  FILLED: 'FILLED',
  REJECTED: 'REJECTED'
}

class Order {
  constructor(id, stock, quantity, type, status) {
    if(quantity === 0) { throw new Error('Quantity must not be 0')}

    this.id = id
    this.stock = stock
    this.quantity = quantity
    this.type = type || 'LIMIT'
    this.status = status || 'SENDING'
  }

  toString() {
    return `${this.status} Order: ${this.quantity > 0 ? 'BUY' : 'SELL'} ${Math.abs(this.quantity)} ${this.stock} at ${this.type === 'LIMIT' ? this.price : 'MARKET'}`
  }
}

buildLimitOrder(stock, quantity, limitPrice) {
  const id =
  return new Order(id, stock, quantity)
}
