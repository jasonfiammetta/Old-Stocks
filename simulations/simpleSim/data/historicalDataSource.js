class HistoricalDataSource {
  constructor(data) {
    this.index = 0;
    this.data = data;
    this.length = data.length; // size
  }

  hasNext() {
    return this.index < this.length;
  }

  next() {
    return data[index++];
  }

  reset() {
    index = 0;
  }
}

module.exports = HistoricalDataSource;
