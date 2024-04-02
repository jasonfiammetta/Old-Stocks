const tda = require('tda-api-client')

async function checkAccount() {
    try {
        const account = await tda.accounts.getAccounts({ fields: 'positions,orders', verbose: true })
        console.log('account', account)
        return account
    } catch (err) {
        console.log(err)
    }
}

checkAccount()