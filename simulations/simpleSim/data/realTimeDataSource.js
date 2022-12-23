const MAX_BUFFER_SIZE = 10000; // config.MAX_BUFFER_SIZE || 10000

class RealTimeDataSource {
  constructor(buffer, index) {
    this.buffer = buffer || [];
    this.index = index || 0;
  }

  add(dataPoint) {
    this.buffer[this.index++] = dataPoint;
    this.index %= MAX_BUFFER_SIZE;
  }

  hasNext() {
    return !!this.buffer[(this.index + 1) % MAX_BUFFER_SIZE];
  }

  next() {
    const r = this.buffer[this.index];
    this.buffer[this.index--] = undefined;
    this.index %= MAX_BUFFER_SIZE;
    return r;
  }

  reset() {
    this.buffer = [];
    this.index = 0;
  }
}

module.exports = RealTimeDataSource;
