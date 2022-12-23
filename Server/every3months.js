// Last refresh token date: January 9th, 2022
// Expected expiration: April 9th, 2022
// (isn't that funny? still 90 days, jan 31, feb 28, mar 31, perfect average of 30)

// const { client_id } = require('.../tdaclientauth.json')
const client_id = 'BMTA7LEFQHZGFMO7ADDEXF2G4PQ3FGFG@AMER.OAUTHAP'
const redirect_uri = 'http://localhost'

const { exec } = require('child-process')
exec(`open -a "Google Chrome" https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&client_id=${encodeURIComponent(client_id)}`)

// const ports = [80, 443] http, https

const app80 = express()
app80.get('/', (req, res, next) => {
  let code = req.query.code
  console.log('80: code comes pre decoded?', code === decodeURIComponent(code))
  getRefreshToken(code)
  res.send(`Hello from port 80! Your new code is:\n${code}\n\nURI Decoded:\n${decodeURIComponent(code)}\n\nAnd your tokens have been refreshed!`)
})

const server1 = app80.listen(80, () => {
  console.log('listening on port 80')
})

const app443 = express()
app443.get('/', (req, res, next) => {
  let code = req.query.code
  console.log('443: code comes pre decoded?', code === decodeURIComponent(code))
  getRefreshToken(code)
  res.send(`Hello from port 443! Your new code is:\n${code}\n\nURI Decoded:\n${decodeURIComponent(code)}\n\nAnd your tokens have been refreshed!`)
})

const server2 = app443.listen(443, () => {
  console.log('listening on port 443')
})

// let url = process.argv[2]
// let code = decodeURI(url.substring(url.indexOf('code=')).substring('code='.length))
const getRefreshToken = function(code) {
  console.log('code:', code)
  // code = decodeURI(code)

  let auth = {
    grant_type: 'authorization_code',
    access_type: 'offline',
    code,
    client_id,
    redirect_uri,
  }

  axios.post('https://developer.tdameritrade.com/authentication/apis/post/token-0', auth)
  .then(res => {
    console.log(res.data)
    replaceRefreshToken(res.data.refresh_token)
    console.log(`Your new refresh token will expire at approximately ${new Date(Date.now() + (res.data.refresh_token_expires_in * 1000)).toLocaleString()}`)
  })
  .then(_ => {
    console.log('closing servers')
    server1.close()
    server2.close()
  })
}

const replaceRefreshToken = function(refresh_token) {
  const filePath = path.join(process.cwd(), '/config/tdaclientauth.json')
  // const { filePaths } = require('.../ListOfProjectsThatUseTDAAuth')
  const authConfig = { refresh_token, client_id }

  fs.writeFile(filePath, JSON.stringify(authConfig), null, 2), (err) => {
    if (err) console.error(err)
  }
}
