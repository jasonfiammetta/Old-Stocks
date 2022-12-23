export default class order {
  constructor(stock, quantity, price) {
    this.stock = stock
    this.quantity = quantity
    this.market = !price
    this.limitPrice = price
    // this.stopPrice ?

    // this.status = 'working'
  }

  let status = [ 'working', 'filled', 'canceled'] // finish other statuses, also, static enum?
  // from TDA API:
  // ORDER_STATUS: {
  //     AWAITING_PARENT_ORDER: 'AWAITING_PARENT_ORDER',
  //     AWAITING_CONDITION: 'AWAITING_CONDITION',
  //     AWAITING_MANUAL_REVIEW: 'AWAITING_MANUAL_REVIEW',
  //     ACCEPTED: 'ACCEPTED',
  //     AWAITING_UR_OUT: 'AWAITING_UR_OUT',
  //     PENDING_ACTIVATION: 'PENDING_ACTIVATION',
  //     QUEUED: 'QUEUED',
  //     WORKING: 'WORKING',
  //     REJECTED: 'REJECTED',
  //     PENDING_CANCEL: 'PENDING_CANCEL',
  //     CANCELED: 'CANCELED',
  //     PENDING_REPLACE: 'PENDING_REPLACE',
  //     REPLACED: 'REPLACED',
  //     FILLED: 'FILLED',
  //     EXPIRED: 'EXPIRED'
  //   }

  setStatus(status) {
    this.status = status // validation?
  }

}
