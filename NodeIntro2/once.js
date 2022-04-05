const events = require("events")

const eventEmitter = new events.EventEmitter()



//Create a Event
eventEmitter.once('sumNumber', ()=>{console.log("Sum Numbers")})

//Trigger a Event
eventEmitter.emit("sumNumber")
eventEmitter.emit("sumNumber")
eventEmitter.emit("sumNumber")