function Generator(mutate) {
  this.value = Math.random()
  this.mutate = mutate || function (v) { v += Math.random(); return v }
  this.next = function() {
    return this.mutate(this.value)
  }
}

module.exports = {
  Generator
}
