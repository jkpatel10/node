const mongoose = require("mongoose")
const schema = require("../model/schema")

module.exports.getData = (req,res)=>{
    res.render("add")
}

module.exports.add = async(req,res)=>{
    res.render("add")
}

module.exports.addstudent = async(req,res)=>{
    res.redirect("/view")
}

module.exports.data = async(req,res)=>{
    let data = await schema.find({})
    res.render("add",{data})
}

module.exports.post = async(req,res)=>{
    await schema.create(req.body)
    res.redirect("/view")
}

module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}

module.exports.view = async (req, res) => {
    let data = await schema.find({});
    res.render("view", {data});
};

module.exports.delete = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/view");
};

module.exports.edit = async (req, res) => {
    let student = await schema.findById(req.query.id);
    res.render("edit", { student });
};

module.exports.update = async (req, res) => {
    await schema.findByIdAndUpdate(req.query.id, req.body);
    res.redirect("/view");
};