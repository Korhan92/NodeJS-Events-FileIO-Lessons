// import => const customName = require("packname")

const events = require("events")

const eventEmitter = new events.EventEmitter()

//Create a Event
eventEmitter.on('sayHi', (user)=>{
    console.log(`Hi NodeJS... ${user.name} - ${user.surname}`)
})





//Trigger a Event
const data = "Korhan"
const data2 = {name:"Korhan",surname:"Tokgöz"}
eventEmitter.emit('sayHi',data2)
// eventEmitter.emit('sayHi')
// eventEmitter.emit('sayHi')



//Trigger e Event per 5min

// setInterval(() => {
//     eventEmitter.emit('sayHi') 
// }, 5000);