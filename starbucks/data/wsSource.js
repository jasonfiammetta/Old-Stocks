const BUFFER_SIZE = 1000

class WSDataSource {
    constructor(ws, db) {
      this.socket = ws
      this.db = db
      this.buffer = []
    }
  
    isLive() { return this.socket.connected() } // check if socket connected; should check if recent message? if disconnected?

    onConnect() {}

    // login() {}

    onMessage(message) {
        // if(isLoginMessage(message)) {        // follow TDA procedure
        //     performLoginSequence()
        //     return
        // }

        // transform message if need be
        stockList[stock].update(message)        // emit data to appropriate stock
        this.record(message)                    // batch and store in db

    }

    onClose() {}

    record(message) {
        console.log(message) // if logging on
        // maybe filter unwanted stuff from message, transform it some way, etc
        this.buffer.push(message)
        if (this.buffer.length > BUFFER_SIZE) {
            // sqlite.put(message)
            this.buffer = []
        }


    }

  }
  
  export default WSDataSource
  