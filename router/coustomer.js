const express = require("express");
const router = express.Router();
const Coustomer = require("../models/customer")
const passport = require("passport");

// user login

router.get("/signup/user", async (req, res) => {
    res.render("userlogin/signup.ejs")
});
router.post("/signup/user", async (req, res, next) => {
    
        let { username, email, profile, password } = req.body;
    const user1 = new Coustomer({ email, username, profile });
    let result = await Coustomer.register(user1, password);
    console.log(result)
    req.login(user1, (err) => {
        if (err) {
            next(err)
        }
        res.redirect("/listing")
    })
    
}
)

router.get("/login/user", async (req, res) => {
    res.render("userlogin/login.ejs")
});
router.post("/login/user", passport.authenticate("local", { failureRedirect: "/login/user" }), async (req, res) => {
    res.redirect("/listing")
});
// user logout
router.get("/logout/user", (req, res,next) => {
    req.logout((err)=>{
        if (err) {
            next(err)
        }
    });
    res.redirect("/");
});

module.exports = router;
