/*

class Source {
  constructor(source, target)

}

Source source = websocket / fake generator
Buffer buffer = [] / actual buffer somehow
Target target = ???? // multiple targets?????

source.onMessage() {
  buffer.push(source.next())
}

while(source.on) { // do i need to consider source.off and buffer > 0 ?
  if(buffer.size > 0) {
    target.consume(buffer) is this an asynchronous process??
    // Do I need to consider what happens if the buffer gets too large????


  }

}


*/


// turn static data source into stream
dataFromJson = jsonResponse.data
let index = 0

function hasNext() {
  return index < dataFromJson.stockPrices.length
}

function next() {
  // if(!dataFromJson.stockPrices[index]) { throw error }
  return dataFromJson.stockPrices[index++]
}
