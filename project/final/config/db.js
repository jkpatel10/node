const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/final")

const db = mongoose.connection

db.once("open", (err) => {
 err ? console.log(err): console.log("DB IS connected");
})

module.exports = db