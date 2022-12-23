// multiple symbols, might only need single
let displaySymbols = (symbols) => {
  let str = 'Searching on symbols:'
  if (symbols) {
    symbols.forEach(s => str += '\n\t' + s)
  }
  str += '\n' + new Date().toString()
  return str
}

module.exports = displaySymbols
