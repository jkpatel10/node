const Schema = require("../model/taskSchema")

module.exports.firstData = async (req, res) => {
    if (req.cookies.admin) {
        res.render("taskForm")
    }
    else {
        res.redirect("/login")
    }
}

module.exports.AddAdmin = async (req, res) => {
    if (req.cookies.admin) {
        let data = await Schema.find({})
        res.render("taskList", { data })
    }
    else{
        res.redirect("/login")
    }
}

module.exports.addAdminData = async (req, res) => {
    await Schema.create(req.body)
    res.redirect("/task/taskList")
}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id)
    res.redirect("/task/taskList")
}

module.exports.editData = async (req, res) => {
    let singleData = await Schema.findById(req.query.id)
    res.render("taskItem", { singleData })
}

module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.body.id, req.body)
    res.redirect("/task/taskList")
}