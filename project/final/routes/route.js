const express = require("express")
const route = express.Router()

const ctl = require("../controller/ctl")

route.get("/",ctl.register)
route.post("/register",ctl.registerTask)


route.get("/login",ctl.login)
route.post("/login",ctl.loginAdmin)

route.get("/dashboard",ctl.Dashboard)
module.exports = route