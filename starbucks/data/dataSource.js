
class DataSource {
  constructor(data) {
    this.data = data
    this.index = 0
  }

  hasNext() { return this.index < this.data.length }

  next() { return this.data[this.index++] }

  reset() { this.index = 0 }
}

export default DataSource
