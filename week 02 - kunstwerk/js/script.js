
var letterL = document.querySelector('.l-letter');
var letterI = document.querySelector('.i-letter');
var letterG = document.querySelector('.g-letter');
var letterH = document.querySelector('.h-letter');
var letterT = document.querySelector('.t-letter');

letterL.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

letterI.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};


letterG.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

letterH.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

letterT.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

function alleKleur() {
   var element = document.body;
   element.classList.toggle("allekleur");
}
//bron: https://codepen.io/chionae/pen/xzOWvM


function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
//bron: https://codepen.io/chionae/pen/xzOWvM

function greenFunctie() {
   var element = document.body;
   element.classList.toggle("green-verloop");
}
//bron: https://codepen.io/chionae/pen/xzOWvM

function blauwFunctie() {
   var element = document.body;
   element.classList.toggle("blue-verloop");
}
//bron: https://codepen.io/chionae/pen/xzOWvM

function roodFunctie() {
   var element = document.body;
   element.classList.toggle("verloop");
}
//bron: https://codepen.io/chionae/pen/xzOWvM





//var element = document.getElementById("beweeg");
//button.addEventListener("click", function(){
//   element.classList.toggle("letter-vorm");
//});

//var button = document.querySelector("ss-letter");


