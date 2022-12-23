
let cash = 1000 // set this value somewhere else
const orders = []
const portfolio = {}

let addOrder = function(order) {
  orders.push(order)
}

tick() => {
  for(const order in orders) {
    if(confirmed(order)) {

    }
  }
}

confirmed(order) {
  // return tda.orders.getOrder(order.id).status !== 'WORKING'
}
