const express = require("express")
port = 1008
const path = require("path")

const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",express.static(path.join(__dirname,"public")));

let task = []

app.get("/",(req,res)=>{
    res.render("index",{task})
})

app.post("/addData",(req,res)=>{
    let data = {
        id : Date.now(),
        ...req.body
    }
    task.push(data)

    res.redirect("/")
})

app.get("/deleteData/:id",(req,res)=>{
    let newData = task.filter((item)=>item.id != req.params.id)
    task = newData
    res.redirect("/")
})

app.get("/editData",(req,res)=>{
    let singleData = task.find((item)=>item.id == req.query.id)
    res.render("edit",{singleData})
})

app.post("/updateData",(req,res)=>{
    let singleData = task.find((item)=>item.id == req.body.id)

    singleData.task = req.body.task
    singleData.priority = req.body.priority

    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server started on port ${port}`);
})