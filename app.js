var express         = require("express"),
    bodyParser      = require("body-parser"),
    app             = express(),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds"),
    flash           = require("connect-flash");

var commentRoutes        = require("./routes/comments"),
    campgroundRoutes     = require("./routes/campground"),
    indexRoutes          = require("./routes/index");

mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb+srv://yelpcamp:webdevbootcamp@herokucluster.kf7a6.mongodb.net/<dbname>?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useCreateIndex: true 
}).then(() =>{
    console.log("connected to DB!")
}).catch(err => {
    console.log("ERROR:", err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");

// PASSPORT CONFIGURATION ///////////////////////////////
app.use(require("express-session")({
    secret: "Petra is best girl",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function () {
 console.log("Server Has Started!");
});

// seedDB(); // SEED THE DATABASE