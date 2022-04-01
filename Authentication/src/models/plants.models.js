const mongoose = require('mongoose')

const plantsSchema = mongoose.Schema({
    name:{type:String, required:true},
    soldby:{type:String, required:true},
    S_price:{type:Number, required:true},
    img:{type:String, required:true}, 
    color:{type:String, required:true},
    b_img:{type:String, required:true},
    des:{type:String, required:true},
})

module.exports = mongoose.model("plant",plantsSchema)