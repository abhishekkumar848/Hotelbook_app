const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("./reviews");
const User = require("./user");
const { urlencoded } = require("express");

const ListingSchema = Schema({
  title: {
    type: String,
  },
  description: String,
  image: {
    url :String,
    filename:String
  },
  image1: String,
  image2: String,
  price: Number,
  discount: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  
});
ListingSchema.post("findOneAndDelete", async (Listing) => {
  await Review.deleteMany({_id:{$in :Listing.reviews}})
});
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
