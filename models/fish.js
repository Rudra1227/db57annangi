const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
Name: String,
colour: {type:String,required:true},
age: {type:Number,min:0,max:100}
})
module.exports = mongoose.model("fish", fishSchema)
