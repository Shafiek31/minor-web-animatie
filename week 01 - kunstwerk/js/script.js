
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


function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
//bron: https://codepen.io/chionae/pen/xzOWvM
