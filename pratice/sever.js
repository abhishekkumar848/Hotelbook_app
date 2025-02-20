const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const flash = require('connect-flash');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(cookieParser("codes"))

// app.get("/login",(req,res)=>{
//     res.cookie("city","delhi",{signed:true})
//     res.send("hii working")
// })
// app.get("/login/sign",(req,res)=>{
//     console.log(req.signedCookies)
//     res.send("working")
// })
app.use(
  session({ secret: "myScreateCode",
     resave: false,
     saveUninitialized: true 
    }));
app.use(flash());
// 

app.get("/login",(req,res)=>{
    let {name="nothing"}= req.query;
    req.session.come = name
    req.flash("success","user req is complete")
    console.log(req.session.come)
    res.redirect("/sign")
})
app.get("/sign",(req,res)=>{
    res.render("msg.ejs",{name:req.session.come,msg:req.flash("success")})
})
app.listen(3000, () => {
  console.log("server is start now ");
});
