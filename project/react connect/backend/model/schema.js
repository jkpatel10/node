const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    rating:{
        type : Number,
        required : true
    },
    genre:{
        type : String,
        required : true
    }
})

const firstSchema = mongoose.model("rcs",Schema)

module.exports = firstSchema