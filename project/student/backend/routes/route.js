const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.dashboard);

route.get("/add", ctl.getData);        
route.post("/add", ctl.post);          

route.get("/view", ctl.view);      
route.get("/delete", ctl.delete);   

route.get("/edit", ctl.edit);
route.post("/update", ctl.update);

module.exports = route;