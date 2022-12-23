const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')
const { getAccountId } = require('../../../config/tda_config.js')

const orderBuilder = require('../../orders/orderBuilder.js')

router.get('/orders/:id', (req, res, next) => {
  tda.orders.getOrder({ accountId: getAccountId(), orderId: req.params.id, verbose: true })
    .then(order => {
      res.json({ order: order })
    })
    .catch(next)
})

router.get('/account-orders', (req, res, next) => {
  // req.query
  tda.orders.getOrdersByAccount({ accountId: getAccountId(), ...req.query }) // see if this works? else need: { maxResults, fromEnteredTime, toEnteredTime, status }
    .then(orders => {
      res.json({ orders: orders })
    })
    .catch(next)
})

router.get('/orders', (req, res, next) => {
  tda.orders.getOrdersByQuery(...req.query)
    .then(orders => {
      res.json({ orders: orders })
    })
    .catch(next)
})

router.post('/place-order', (req, res, next) => {
  console.log('body:', req.body)
  console.log('order request:', req.body.order)
  const { instrument, quantity, options } = req.body.order
  console.log('instrument:', instrument, 'quantity:', quantity, 'options:', options)
  const order = orderBuilder(instrument, quantity, options)
  console.log('order:', order)
  tda.orders.placeOrder({ accountId: getAccountId(), orderJSON: order })
    .then(tdaRes => {
      console.log('tda response:', tdaRes)
      res.json({ tda: tdaRes })
    })
    .catch(error => {
      console.log(error)
      res.send(500)
    })
  // res.json({ order: order })
})

router.put('/place-order/:id', (req, res, next) => {
  console.log('order replace request:', req.body.order)
  const { instrument, quantity, options } = req.body.order
  const order = orderBuilder(instrument, quantity, options)
  tda.orders.replaceOrder({ accountId: getAccountId(), orderId: req.params.id, orderJSON: order })
})

router.delete('/cancel-order/:id', (req, res, next) => {
  tda.orders.cancelOrder({ accountId: getAccountId(), orderId: req.params.id})
    .then(res => {
      res.send('Order canceled. ', res)
    })
    .catch(next)
})

module.exports = router
