const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
Name: String,
colour: String,
age: Number
})
module.exports = mongoose.model("fish", fishSchema)
