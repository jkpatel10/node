const express = require("express")

const route = express.Router()
const ctl = require("../controller/ctl")
const passport = require("../middleware/localst")

route.get("/",ctl.login)
route.post("/login",passport.authenticate("localSt",{failureRedirect:("/")}),ctl.loginAdmin)
route.get("/logout",ctl.logout)

route.get("/dashboard",passport.checkAuth,ctl.dashboard)

route.get("/addAdmin",passport.checkAuth,ctl.addAdmin)
route.post("/addAdmin",ctl.addAdmindata)

route.get("/editAdmin",passport.checkAuth,ctl.editData)
route.post("/updateData",ctl.updateData)
route.get("/deleteData",ctl.deleteData)

route.get("/viewAdmin",passport.checkAuth,ctl.viewAdmin)

module.exports = route