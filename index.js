const mongoose = require("mongoose");
const initData = require("./init/data"); 
const Listing = require("./models/listing");
const data = require("./init/data");


let mogUlr = "mongodb://127.0.0.1:27017/HotelBooking"
main().then(()=>{
    console.log("complete server now mongoose")
}).catch(err => console.log(err));


async function main() {
  await mongoose.connect(mogUlr);
}

const initDB = async () => {


  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was delete no insert new ",initData.data)
  } catch (error) {
    console.log("database error",error)
  }
}
initDB();