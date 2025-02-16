const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { error } = require("console");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const app = express();

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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
app.get("/listing/:id", async (req, res,next) => {
  try {
    let { id } = req.params;
  let listDetails = await Listing.findById(id);
  // console.log(listDetails);
  res.render("listing/show.ejs", { listDetails });
  } catch (err) {
    next(err)
  }
  
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
  let Details = await Listing.findById(id);
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
app.all("*", (err,req, res, next) => {
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
