const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
    email :{
        type : String,
        required : true
    }
})             

const firstschema = mongoose.model("students",schema)

module.exports = firstschema