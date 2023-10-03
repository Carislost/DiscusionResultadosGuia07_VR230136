document.onkeydown = keyHit;
document.getElementById("prevButton").addEventListener("click", function () { chgSlide(-1); });
document.getElementById("nextButton").addEventListener("click", function () { chgSlide(1); });

var thisPic = 0;
var myPix = [
    "img/Marvel.jpg",
    "img/Wolverine.jpg",
    "img/Ironman.jpg",
    "img/Deadpool.jpg",
    "img/Venom.jpg",
    "img/CaptainAmerica.jpg",
    "img/Thor.jpg",
    "img/Spiderman.jpg",
    "img/BlackPanther.jpg",
    "img/Hulk.jpg"
];
var imgCt = myPix.length - 1;

function keyHit(evt) {
    var ltArrow = 37;
    var rtArrow = 39;
    var thisKey = (evt) ? evt.which : window.event.keyCode;
    if (thisKey == ltArrow) {
        chgSlide(-1);
    } else if (thisKey == rtArrow) {
        chgSlide(1);
    }
    return false;
}

function chgSlide(direction) {
    thisPic = thisPic + direction;
    if (thisPic > imgCt) {
        thisPic = 0;
    }
    if (thisPic < 0) {
        thisPic = imgCt;
    }
    document.getElementById("myPicture").src = myPix[thisPic];
}
