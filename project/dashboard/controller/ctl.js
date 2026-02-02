const schema = require("../model/schema")

module.exports.login = (req,res)=>{
    res.render("login")
}

module.exports.loginAdmin = async(req,res)=>{
    let admin = await schema.findOne({
        email : req.body.email
    })

    if (!admin) {
        res.redirect("/")
    }

    if (admin.password == req.body.password) {
        {
            res.redirect("/dashboard")
        }
    }else{
        res.redirect("/")
    }
}

module.exports.logout = (req,res)=>{
    res.clearCookie("admin")
    res.redirect("/")
}

module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}

module.exports.addAdmin = (req,res)=>{
    res.render("addAdmin")
}

module.exports.addAdmindata = async(req,res)=>{
        await schema.create(req.body)
        res.redirect("/dashboard")
}

module.exports.deleteData = async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/viewAdmin")
}

module.exports.editData = async(req,res)=>{
    let singleData = await schema.findById(req.query.id)
    res.render("editAdmin",{singleData})
}
module.exports.updateData = async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/viewAdmin")
    })
}

module.exports.viewAdmin = async(req,res)=>{
     let data = await schema.find({})
        res.render("viewAdmin",{data})
}