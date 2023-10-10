

let cash = 1000 // set this value somewhere else
const orders = []
const portfolio = {}

const addOrder = function(order) {
  orders.push(order)
}

const tick = function() {
  for(const order in orders) {
    if(confirmed(order)) {

    }
  }
}

const cachedWorking = function(order) {
  return findById(order.id).status !== 'WORKING'
}

const findById = function(id) {
  return orders.filter(order => order.id == id)[0]
}

const finished = function(order) {
  // return cachedWorking(order) || tda.orders.getOrder(order.id).status !== 'WORKING'
}

module.exports = {
  tick,
  addOrder,
  finished,
}