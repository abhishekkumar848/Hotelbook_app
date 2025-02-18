
const mongoose = require("mongoose");


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
})

const Review = mongoose.model("Review",ReviewSchema);
module.exports= Review;