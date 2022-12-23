const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')

router.get('/accounts/:id', (req, res, next) => {
  tda.accounts.getAccount({ accountId: req.params.id, fields: 'positions,orders' })
  .then(account => {
    res.json({ account: account})
  })
  .catch(next)
})

router.get('/accounts', (req, res, next) => {
  tda.accounts.getAccounts({ fields: 'positions,orders' })
    .then(accounts => {
      res.json({ accounts: accounts })
    })
    .catch(next)
})

module.exports = router
