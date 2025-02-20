const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const Review = require("./models/reviews");
const { error } = require("console");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const app = express();
const session = require("express-session");
const flash = require('connect-flash');
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user")

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// express session
app.use(session({ secret: "myScreateCode",
     resave: false,
     saveUninitialized: true ,
     cookie:{
      expires:Date.now()+7*24*60*60*1000,
      maxAge:7*24*60*60*1000,
      httpOnly:true,
     }
    }));
    // flash message 
app.use(flash());
// passport 

app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy 
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
  res.locals.msg = req.flash("success")
  next()
})
let ports = 8080;
//root
app.get("/", async (req, res) => {
  let lists = await Listing.find({});
  res.render("root.ejs", { lists });
});
// home route
app.get("/listing", async (req, res) => {
  let lists = await Listing.find({});
  res.render("listing/home.ejs", { lists });
});
// show route
app.get("/listing/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let listDetails = await Listing.findById(id).populate("reviews");
    // console.log(listDetails);
    res.render("listing/show.ejs", { listDetails });
  } catch (err) {
    next(err);
  }
});
// Review  page add
app.post("/listing/:id/review", async (req, res) => {
  let addListing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);

  addListing.reviews.push(newReview);
  await addListing.save();
  await newReview.save();
  console.log("hello", addListing, newReview);
  res.redirect(`/listing/${addListing._id}`);
});
//review delete
app.delete("/listing/:id/review/:reviewId", async (req, res) => {
  let { id ,reviewId} = req.params;
  let revDelete = await Review.findByIdAndDelete(reviewId);
  let upDATElist = await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId} })  
  res.redirect(`/listing/${id}`);
});
//--------------------------------admin page starts-------------------------------------------
//admin update route
app.get("/admin", async (req, res) => {
  let lists = await Listing.find({});
  res.render("admin/update.ejs", { lists });
});

// edit route
app.get("/admin/:id", async (req, res) => {
  let { id } = req.params;
  let Details = await Listing.findById(id).populate("reviews");
  // console.log(listDetails);
  res.render("admin/edit.ejs", { Details });
});
// create new room
app.get("/create", async (req, res) => {
  res.render("admin/new.ejs");
});

// new route
app.post("/create/new", (req, res) => {
  let {
    title,
    description,
    location,
    country,
    price,
    discount,
    image,
    image1,
    image2,
  } = req.body;
  console.log(req.body);
  let Datanew = new Listing({
    title: title,
    description: description,
    image: image,
    image1: image1,
    image2: image2,
    price: price,
    discount: discount,
    location: location,
    country: country,
  });
  Datanew.save()
    .then(() => {
      console.log("add data ");
    })
    .catch((err) => {
      next(err);
    });
  req.flash("success","new Hotel add now ");
  res.redirect("/admin");
});
// update route
app.put("/admin/:id/update", async (req, res) => {
  try {
    let { id } = req.params;
    let {
      title,
      description,
      location,
      country,
      price,
      discount,
      image,
      image1,
      image2,
    } = req.body;
    let updateData = await Listing.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        price: price,
        discount: discount,
        location: location,
        country: country,
        image: image,
        image1: image1,
        image2: image2,
      },
      { new: true }
    );
    console.log(updateData);
    res.redirect("/admin");
  } catch (err) {
    next(err);
  }
});
// delete route
app.get("/admin/:id/delete", async (req, res) => {
  let { id } = req.params;
  let allData = await Listing.findByIdAndDelete(id);
  console.log(allData);
  res.redirect("/admin");
});
// Review  page delete
app.delete("/admin/:id/review/:reviewId", async (req, res) => {
  let { id ,reviewId} = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId} })  
  res.redirect(`/admin/${id}`);
});
// listing jsfile daa insert
// app.get("/list",async (req,res)=>{
//   let  housedata = new Listing ({
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image:  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     image1:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     image2:"https://media.istockphoto.com/id/173592376/photo/comtemporary-asian-decor.jpg?s=2048x2048&w=is&k=20&c=VxXTiN5zu1Y4Oc2IJL1FQLEbHOpCLvWcQW-JpDkbK1I=",
//     price: 1500,
//     discount:5.7,
//     location: "Malibu",
//     country: "United States",
//   })
//   housedata.save().then(()=>{
//     console.log("data was enter")
//   }).catch((err)=>{
//     console.log("some err of data base")
//   })
//   res.send("data was add now")
// })
// mongoose server
let mogUlr = "mongodb://127.0.0.1:27017/HotelBooking";
main()
  .then(() => {
    console.log("complete server now mongoose");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mogUlr);
}
// page not found
app.all("*", (err, req, res, next) => {
  next(new ExpressError(404, "page not found"));
});
// error middleware
app.use((err, req, res, next) => {
  let { status, message } = err;
  res.render("error.ejs", { message });
});
// server
app.listen(ports, (req, res) => {
  console.log("server is working ", ports);
});
