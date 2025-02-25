module.exports.isLogin = (req,res,next)=>{
    if (!req.isAuthenticated()) {
        return res.redirect("/login")
      }
      next() 
};

module.exports.isUser = (req,res,next)=>{
  if (!req.isAuthenticated()) {
      return res.redirect("/login/user")
  }
    next() 
}

