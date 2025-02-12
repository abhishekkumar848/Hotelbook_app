const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:String,
    image:{
        default:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type:String,
        set:(v)=> v === " " ? "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    image1:String,
    image2:String,
    price:Number,
    discount:Number,
    location: String,
    country: String
})

const Listing = mongoose.model("Listing",ListingSchema);
module.exports= Listing;