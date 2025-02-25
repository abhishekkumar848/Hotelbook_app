
const mongoose = require("mongoose");
const { Schema } = mongoose;


const ReviewSchema = new mongoose.Schema({
    comment:{
        type:String,
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createAT:{
     type:Date,
     default:Date.now()
    },
    auther :{
        type:Schema.Types.ObjectId,
        ref:"Coustomer"
    }
})

const Review = mongoose.model("Review",ReviewSchema);
module.exports= Review;