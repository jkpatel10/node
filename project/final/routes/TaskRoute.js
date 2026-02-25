const express = require("express")
const route = express.Router()

const ctl = require("../controller/TaskCtl")

route.get("/taskForm",ctl.firstData)

route.get("/taskList",ctl.AddAdmin)
route.post("/taskList",ctl.addAdminData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",ctl.editData)
route.post("/updateData",ctl.updateData)

module.exports = route