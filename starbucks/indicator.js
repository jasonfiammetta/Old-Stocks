
class Indicator {
  constructor() {
    this.formula
    this.description
    this.variables
  }

  update(data) {
    this.formula(data)
  }

}
