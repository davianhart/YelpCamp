var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Cloud's Rest is a beautiful state park located a mere two hour drive from Portland, OR. With a beautiful view of the Pacific, it is a wonderful place to bring the family."
    },
    {
        name: "Desert Mesa", 
        image: "https://www.nps.gov/nabr/planyourvisit/images/campground_utahscyncty.jpg",
        description: "Desert Mesa is situated in New Mexico, 4 hours north of Albequerque. Far from urban civilization, it is one of the nicest places in the south to bring a telescope and view the planets and the stars - you can see the Milky Way on a clear enough night!"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Found at the culmination of a treacherous journey to the bottom of this Utah canyon, the aptly named Canyon Floor is as secluded as camping gets. This campsite is not for the faint of heart!"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//          //add a few campgrounds
//         data.forEach(function(seed){
//             Campground.create(seed, function(err, campground){
//                 if(err){
//                     console.log(err)
//                 } else {
//                     console.log("added a campground");
//                     //create a comment
//                     Comment.create(
//                         {
//                             text: "This place is great, but I wish there was internet",
//                             author: "Homer"
//                         }, function(err, comment){
//                             if(err){
//                                 console.log(err);
//                             } else {
//                                 campground.comments.push(comment);
//                                 campground.save();
//                                 console.log("Created new comment");
//                             }
//                         });
//                 }
//             });
//         });
    }); 
    //add a few comments
}

module.exports = seedDB;