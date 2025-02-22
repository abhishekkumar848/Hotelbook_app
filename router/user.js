const express = require("express");
const router = express.Router()
const User = require("../models/user")
const passport = require("passport");


//signup
router.get("/signup",(req,res)=>{
 res.render("loginAdmin/signup.ejs")
})
router.post("/signup",async (req,res,next) => {
  try {
    let {username,email,password} = req.body;
  const user1 = new User({email,username});
  let result = await User.register(user1,password);
  console.log(result)
  req.login(user1,(err)=>{
    if (err) {
      next(err)
    }
    res.redirect("/admin")
  })
  
  } catch (error) {
    res.redirect("/signup")

  }
  
});
//login up
router.get("/login", (req, res) => {
  res.render("loginAdmin/login.ejs");
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  async (req, res) => {
   try {
    res.redirect("/admin")
   } catch (error) {
    console.log(error)
   }
  }
);
// logout
router.get("/logout",(req,res,next)=>{
  req.logout((err)=>{
    if (err) {
      return next(err)
    }
  })
  res.redirect("/")
})

module.exports = router;