const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://khushi:2106@cluster0.tqamdpj.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("db is connencted");
})
.catch((err)=>{
    console.log(err);
}
)
// const db = mongoose.connection

// db.once("open",(err)=>{
//     err ? console.log(err) : console.log("db connected");
// })

// module.exports = db