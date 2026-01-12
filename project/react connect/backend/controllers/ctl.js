const schema = require("../model/schema")

module.exports.getData = async (req,res)=>{
    await schema.find({}).then((data)=>{
        res.json({"data" : data})
    })
}

module.exports.addData = async (req,res)=>{
    await schema.create(req.body).then((data)=>{
        res.json({"msg" : "Data added successfully","data" : data})
    })
}

module.exports.editData = async (req,res)=>{
    await schema.findById(req.query.id).then((data)=>{
        res.json({"data" : data})
    })
}

module.exports.updateData = async (req,res)=>{
    await schema.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
        res.json({"msg" : "Data updated successfully","data" : data})
    })
}

module.exports.deleteData = async (req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.json({ "msg": "Data deleted successfully", "data": data});
    })
}
