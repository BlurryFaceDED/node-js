const { error } = require("console")
const fs=require("fs")
fs.writeFile("Welcome.txt","Hello Node!!!",(error)=>{
    if (error)throw error
    console.log("File has been created")
})
fs.readFile("Hello.txt",(error,data)=>{
    if (error) throw error
    console.log(data)
})