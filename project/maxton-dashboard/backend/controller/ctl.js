const schema = require("../model/schema")

module.exports.getData = async (req,res)=>{
    await schema.find({}).then((data)=>{
        res.json({"data" : data})
    })
}

module.exports.loginAdmin = async (req, res) => {

    const admin = await schema.findOne({ email: req.body.email });

    if (!admin) {
        return res.json({ msg: "user not found", auth: false });
    }
    if (admin.password == req.body.password) {
        return res.json({ msg: "login successful", auth: true });
    }
    return res.json({ msg: "incorrect password", auth: false });
};

module.exports.postData = async (req,res)=>{
    await schema.create(req.body).then((data)=>{
        res.json({"msg":"Data Added Successfully !!","data" : data})
    })
}

module.exports.deleteData = async (req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.json({"msg":"Data Deleted Successfully !!","data" : data})
    })
}

module.exports.updateData = async (req,res)=>{
    await schema.findByIdAndUpdate(req.body._id,req.body).then((data)=>{
        res.json({"msg":"Data Updated Successfully !!","data" : data})
    })
}