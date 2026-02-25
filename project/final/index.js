const express = require("express")
const port = 1008
const cooki = require("cookie-parser")

const app = express()

app.set("view engine", "ejs")

const db = require("./config/db")

app.use(express.urlencoded({ extended: true }))

app.use(cooki())

app.use("/", require("./routes/route"))
app.use("/task", require("./routes/TaskRoute"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server IS Started:", port);
})