const htttp = require("http");
const port = 1008

const portHandler = (req,res)=>{
    res.write("hello this is node")
    res.end()
}

const server = htttp.createServer(portHandler)

server.listen(port ,(err)=>{
    err ? console.log(err) : console.log("Server started on port : ",port);
})