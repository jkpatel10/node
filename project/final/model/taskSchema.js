const mongoose = require("mongoose")
const schema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priourity: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("task", schema)
module.exports = firstSchema