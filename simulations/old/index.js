const {FakeStock} = require('./fakestocks.js')
console.log(0)
const apple = new FakeStock('AAPL',)
console.log(1, apple)
apple.tick()
console.log(2, apple)
apple.tick()
console.log(3, apple)
