const express = require('express')
const router = express.Router()

const tda = require('../../tda.js')
const { getAccountId } = require('../../../config/tda_config.js')

router.get('/userinfo', (req, res, next) => {
  res.send('Not Important TODO, probably? Actually might be important, getStreamerSubKeys ?')
})

// getUserPreferences
router.get('/userinfo/userpreferences', (req, res, next) => {
  tda.userinfo.getUserPreferences({ accountId: getAccountId() })
    .then(preferences => {
      console.log('preferences:', preferences)
      res.json({ userpreferences: preferences })
    })
    .catch(error => {
      console.log(error)
      res.send(500)
    })
})

// getStreamerSubKeys
router.get('/userinfo/streamersubkeys', (req, res, next) => {
  tda.userinfo.getStreamerSubKeys({ accountIds: getAccountId() })
    .then(subKeys => {
      console.log('subkeys:', subKeys)
      // set sub keys for use

      res.json({ subKeys })
    })
    .catch(error => {
      console.log(error)
      res.send(500)
    })
})

// getUserPrincipals
router.get('/userinfo/userprincipals', (req, res, next) => {
  tda.userinfo.getUserPrincipals({fields: 'streamerSubscriptionKeys,streamerConnectionInfo,preferences,surrogateIds'})
    .then(userPrincipals => {
      console.log('user principals:', userPrincipals)
      // set sub keys, connection info?

      res.json({ userPrincipals })
    })
    .catch(error => {
      console.log(error)
      res.send(500)
    })
})

// updateUserPreferences // leave not implemented

module.exports = router
