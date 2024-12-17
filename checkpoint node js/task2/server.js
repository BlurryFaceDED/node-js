const http=require("http")
const server=http.createServer((req,res)=>{
    res.statusCode(200).send("<h1>Hellow Node!!!</h1>")
})
server.listen(3000,()=>{console.log("server is running")})
