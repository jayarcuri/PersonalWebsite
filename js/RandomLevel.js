/**
 * Created by amullarx on 4/12/16.
 */
// Thanks @Roko Buljan on Stack for this code


// File names for images
var imagesArray = ["trail_level.gif", "pool_level.gif", "airport_level.gif", "summer_level.gif"];
var colorsArray = ['rgba(46, 204, 113,1.0)', 'rgba(255, 224, 189, 0.8)', 'rgba(192, 57, 43, 1.0)', 'rgba(245, 215, 110, 255)'];


function randomizeLevel(){

    var num = Math.floor(Math.random() * (imagesArray.length))
    var imageURL = "media/images/"+ imagesArray[num];
    document.body.style.background = "url("+imageURL+") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

      var all = document.getElementsByClassName('btn-primary');
       for (var i = 0; i < all.length; i++) {
           all[i].style.color = colorsArray[num];
       }
}

//remember the subscript values of the array are 0 to 6 (seven elements) zero based array
//you will have to subtract 1 from the random number generated to account for the zero based array