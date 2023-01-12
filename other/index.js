var images = ["/Valentine_Day/img/heart.png"]
var imgState = 0;
var imgTag = document.getElementById("rose");
imgTag.addEventListener("click", function (event) {
imgState = (++imgState % images.length);
event.target.src = images[imgState];
document.getElementById("text").innerHTML = "Click on last teddy";
});

var I = ["/Valentine_Day/img/I.png"]
var imgState = 0;
var imgTag = document.getElementById("gift");
imgTag.addEventListener("click", function (teddy) {
imgState = (++imgState % I.length);
event.target.src = I[imgState];
document.getElementById("on").innerHTML = "Click on Gift";
});

var u = ["/Valentine_Day/img/you.png"]
var imgState = 0;
var imgTag = document.getElementById("you");
imgTag.addEventListener("click", function (teddy) {
imgState = (++imgState % u.length);
event.target.src = u[imgState];
document.getElementById("on").innerHTML = "I love you";
});
