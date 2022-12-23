const MAX_BUFFER_SIZE = 10000; // config.MAX_BUFFER_SIZE || 10000

/**
Generate Data as needed using given function
Generate on demand, or on a clock
*/
class GeneratedDataSource {
  constructor(gen) {
    this.lastData = null;
    this.generate = gen || Math.random;
    this.buffer = []; // could be useful
  }

  add(dataPoint) {
    if (buffer.length >= MAX_BUFFER_SIZE) {
      // push out oldest data point before insertion
      buffer.shift(); // probably inefficient
      // use circular buffer instead?
      // buffer[index++] = dataPoint
      // index %= MAX_BUFFER_SIZE
    }
    this.lastData = dataPoint;
    buffer.push(dataPoint);
  }

  hasNext() {
    return true;
    // condition for ending
    // return totalGenerated < requestedDatapoints
  }

  next() {
    dataPoint = this.generate(this.buffer);
    this.add(dataPoint);
    return dataPoint;
  }

  reset() {
    this.buffer = [];
  }

  createHistorical(input) {
    // generate a lot of data at once and create a HistoricalDataSource
  }
}

module.exports = GeneratedDataSource;
