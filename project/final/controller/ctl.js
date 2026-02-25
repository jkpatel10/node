const Schema = require("../model/schema")

module.exports.register = (req, res) => {
    res.render("register")
}

module.exports.registerTask = async (req, res) => {
    await Schema.create(req.body)
    res.redirect("/login")
}

module.exports.login = async (req, res) => {
    res.render("login")
}

module.exports.loginAdmin = async (req, res) => {
    let user = await Schema.findOne({ email: req.body.email })
    if (!user) {
        res.redirect("/login")
    }
    if (user.password == req.body.password) {
        res.cookie("admin", user)
        res.redirect("/dashboard")
    }
    else {
        res.redirect("/login")
    }
}

module.exports.Dashboard = async (req, res) => {
    if (req.cookies.admin) {
        res.render("dashboard")
    }
    else {
        res.redirect("/login")
    }
}