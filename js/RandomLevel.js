/**
 * Created by amullarx on 4/12/16.
 */

// File names for images
var imagesArray = ["trail_level.gif", "pool_level.gif", "airport_level.gif", "summer_level.gif"];
//var colorsArray = ['rgba(46, 204, 113,1.0)', 'rgba(255, 224, 189, 0.8)', 'rgba(192, 57, 43, 1.0)', 'rgba(245, 215, 110, 255)'];
var colorsArray = ['rgba(210, 77, 87, 1.0)', 'rgba(255, 224, 189, 1.0)', 'rgba(65, 131, 215, 1.0)', 'rgba(244, 208, 63, 255)'];


function randomizeLevel() {
    var num = Math.floor(Math.random() * (imagesArray.length))
    var imageURL = "media/images/"+ imagesArray[num];
    document.body.style.background = "url("+imageURL+") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

      var all = document.getElementsByClassName('btn-primary');
       for (var i = 0; i < all.length; i++) {
           all[i].style.color = colorsArray[num];
       }
}

function displayLake () {
    var imageURL = "media/images/"+ imagesArray[3];
    document.body.style.background = "url("+imageURL+") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    var all = document.getElementsByClassName('btn-primary');
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = colorsArray[3];
    }
  }

function displayNewton () {
    var imageURL = "media/images/"+ imagesArray[1];
    document.body.style.background = "url("+imageURL+") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    var all = document.getElementsByClassName('btn-primary');
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = colorsArray[1];
    }
  }

function displayTrail () {
    var imageURL = "media/images/"+ imagesArray[0];
    document.body.style.background = "url("+imageURL+") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    var all = document.getElementsByClassName('btn-primary');
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = colorsArray[0];
    }
  }

function displayAirport () {
    var imageURL = "media/images/"+ imagesArray[2];
    document.body.style.background = "url("+imageURL+") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    var all = document.getElementsByClassName('btn-primary');
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = colorsArray[2];
    }
}
