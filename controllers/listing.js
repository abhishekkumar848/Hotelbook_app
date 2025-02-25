const Listing = require("../models/listing");
const Coustomer = require("../models/customer");

const Review = require("../models/reviews");
    

module.exports.home = async (req, res) => {
  let { username } = req.user;
  let customer = await Coustomer.findOne({username});
  console.log(customer);
  let lists = await Listing.find({});
  res.render("listing/home.ejs", { lists ,customer });
} 
 
module.exports.show =async (req, res, next) => {
    let  customer  = req.user;
      console.log(customer);
    try {
      let { id } = req.params;
      let listDetails = await Listing.findById(id).populate("reviews").populate("owner");
      // console.log(listDetails);
      res.render("listing/show.ejs", { listDetails });
      console.log(listDetails)
    } catch (err) {
      next(err);
    }
  }

module.exports.review = async (req, res) => {
    let addListing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
  
    addListing.reviews.push(newReview);
    await addListing.save();
    await newReview.save();
    console.log("hello", addListing, newReview);
    res.redirect(`/listing/${addListing._id}`);
  }


module.exports.reviewDelete = async (req, res) => {
    let { id, reviewId } = req.params;
    let revDelete = await Review.findByIdAndDelete(reviewId);
    let upDATElist = await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    res.redirect(`/listing/${id}`);
  }