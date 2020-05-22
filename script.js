// APA: Generate random background color by clicking on link. (2017, 12 oktober). Geraadpleegd op 18 mei 2020, van https://stackoverflow.com/questions/46716945/generate-random-background-color-by-clicking-on-link

//elke letter is apart om erop te klikken
var letterL = document.querySelector('.l-letter');
var letterI = document.querySelector('.i-letter');
var letterG = document.querySelector('.g-letter');
var letterH = document.querySelector('.h-letter');
var letterT = document.querySelector('.t-letter');
var section02 = document.querySelector('.section-02');
var section01 = document.querySelector('.section-01');
var letterY = document.querySelector('y-letter');

// continu klikken betekent kleur verandering

// letter L
letterL.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

// letter I
letterI.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

// letter G
letterG.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

// letter G
letterH.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};

// letter T
letterT.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};


//bron: Hulp van Danny de Vries
function toggle(event) {
    if(event.keyCode === 72) {
        section01.classList.add('up');
    } else if (event.keyCode === 84) {
        section01.classList.remove('up');
    }
}
//function go(event) {
//    if(event.keyCode === 37) {
//        section01.classList.add('left');
//    } else if (event.keyCode === 39) {
//        section01.classList.remove('lefts');
//    }
//}
//
function togglee(event) {
    if(event.keyCode === 82) {
        section02.classList.add('down');
    } else if (event.keyCode === 83) {
        section02.classList.remove('down');
    }
}

window.addEventListener('keydown', toggle)
window.addEventListener('keydown', togglee)
//window.addEventListener('keydown', go)
console.log();


//Hieronder staan knoppen waardoor de body kleur zal veranderen
// APA: Just a moment... (2020, 10 april). Geraadpleegd op 17 mei 2020, van https://codepen.io/chionae/pen/xzOWvM

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function greenFunctie() {
   var element = document.body;
   element.classList.toggle("green-verloop");
}

function blauwFunctie() {
   var element = document.body;
   element.classList.toggle("blue-verloop");
}

function roodFunctie() {
   var element = document.body;
   element.classList.toggle("verloop");
}

function alleKleur() {
   var element = document.body;
   element.classList.toggle("allekleur");
}
