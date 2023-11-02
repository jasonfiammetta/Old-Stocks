
import { TimeManager } from "./timer"
import WSDataSource from "./data/wsSource"

let socket
let sqlitedb

const timeManager = new TimeManager()
const dataSource = new WSDataSource(socket, sqlitedb)

const sim = function() {
    // dataSource.login()
    timeManager.start()
    while(dataSource.isLive()) {
        timeManager.tick()
        if(shouldUpdate()) { checkWorkingOrders() }
        strategies.update()
        orderManager.sendOrders()
    }
    timeManager.end()
}