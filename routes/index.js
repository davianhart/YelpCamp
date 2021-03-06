var express     =  require("express"),
    router      =  express.Router(),
    passport    =  require("passport"),
    User        =  require("../models/user"),
    Campground  =  require("../models/campground");
// ROOT ROUTE ////////////////////////////////////////////

router.get("/", function(req, res){
    res.render("landing");
});

// =======================================================
// AUTH ROUTES ///////////////////////////////////////////
// =======================================================

// show register form
router.get("/register", function(req, res){
    res.render("register");
});

// sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp! Your registration was succesful, " + user.username + ".");
            res.redirect("/campgrounds");
        });
    });
});

// show log in form
router.get("/login", function(req, res){
    res.render("login");
});

//handling log in logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You have logged out.");
    res.redirect("/");
});

///////////////////////////////////////////////////////////

module.exports = router;