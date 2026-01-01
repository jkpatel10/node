const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    author :{
        type : String,
        required : true
    },
    category :{
        type : String,
        required : true
    }
})

const Schemaa = mongoose.model("books",schema)

module.exports = Schemaa