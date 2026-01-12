const express = require("express")
const route = express.Router()
const ctl = require("../controllers/ctl")

route.get("/getData",ctl.getData)
route.post("/addData",ctl.addData)
route.get("/editData",ctl.editData)
route.put("/updateData",ctl.updateData)
route.delete("/deleteData", ctl.deleteData);

module.exports = route