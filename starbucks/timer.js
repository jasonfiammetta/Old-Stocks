export class TimeManager {
    constructor(log = console.log) {
        this.running = false
        this.tickCount = 0
        this.lastTick = null
        this.log = log
    }

    start() {
      this.startTime = Date.now()
      this.log('beginning timer at', this.startTime)
      this.running = true
      this.tickCount = 0
    }

    tick() {
      this.tickCount++
      let tickTime = Date.now()
      this.log('Tick #', this.tickCount, this.tickTime - this.lastTick)
      this.lastTick = tickTime
    }

    end() {
      this.tick()
      this.endTime = this.tickTime
      this.log('ending at', this.endTime)
      let totalMS = this.endTime - this.startime
      let timeString = (totalMS > 60000 ? `${Math.floor(totalMS / 60000)} minutes and ` : '') + `${(totalMS % 60000) / 1000} seconds`
      this.log(`completed ${this.tickCount} ticks in ${timeString}. average ${totalMS / this.tickCount} milliseconds per tick.`)
    }
  }