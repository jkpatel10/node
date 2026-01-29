const express = require("express")
const route = express.Router()

const ctl = require("../controller/ctl")

route.post("/login",ctl.loginAdmin)

route.get("/getData",ctl.getData)
route.post("/postData",ctl.postData)
route.put("/updateData",ctl.updateData)
route.delete("/deleteData",ctl.deleteData)

module.exports = route