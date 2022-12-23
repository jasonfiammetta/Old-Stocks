class TimeManager {
  constructor(logging) {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.tickCount = 0;
    this.lastTick = null;
    this.log = logging ? logging : console.log; // console log and/or write to file?
  }

  start() {
    this.startTime = new Date();
    this.log("beginning at", this.startTime);
    this.running = true;
    this.tickCount = 0;
    this.lastTick = this.startTime;
  }

  tick() {
    this.tickCount++;
    let tickTime = new Date();
    this.log("Tick #", this.tickCount, tickTime - this.lastTick);
    this.lastTick = tickTime;
  }

  end() {
    this.endTime = this.lastTick;
    this.log("ending at", this.endTime);
    let totalMS = this.endTime - this.startTime;
    let timeString =
      (totalMS > 60000 ? `${Math.floor(totalMS / 60000)} minutes and ` : "") +
      `${(totalMS % 60000) / 1000} seconds`;
    this.log(
      `completed ${this.tickCount} ticks in ${timeString}. average ${
        totalMS / this.tickCount
      } milliseconds per tick.`
    );
  }
}

// // Test
// const time = new TimeManager();
// time.start();
// while (time.tickCount < 10) {
//   for (let i = 0; i < 100000000; i++) {}
//   time.tick();
// }
// time.end();

module.exports = TimeManager;
