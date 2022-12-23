import { randomCharacters } from '../lib/util.js'

class OrderBuilder {
  constructor(owner){
    this.owner = owner
  }

  buildOrder(stock, quantity, price) {
    // build in automatic stops?
    return {
      owner: this.owner,
      stock,
      quantity,
      price,
      // status: status || 'WORKING',
      hashId: this.owner + '-' + stock + '-' + randomCharacters(4) // find library to handle ids
    }
  }
  //setStatus
  //getStatus
  //cost
  //notifyOwner // callback

}



export default OrderBuilder
