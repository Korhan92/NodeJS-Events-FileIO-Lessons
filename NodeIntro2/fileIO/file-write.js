const fs = require("fs")

//fs.appendFile() 

fs.appendFile("demoWrite.txt",
"Hi  Backend world!", 
(error)=>{
    if(error)console.log(error)
     console.log("Added text to file")
 })

 //fs.writeFile()

 fs.writeFile("demoWrite.txt",
"Hi  Backend world!", 
(error)=>{
    if(error)console.log(error)
     console.log("Added text to file")
 })

//  fs.writeFileSync()
//  fs.appendFile()
