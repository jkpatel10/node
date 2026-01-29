const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : Number,
        required : true
    }
})

const firstSchema = mongoose.model("data",schema)
module.exports = firstSchema