// Your code goes here

// Mouseover
// nB = Navigation bar
let nB = document.querySelector(".main-navigation .nav-container .nav");
nB.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
      }, 300);
});

// Double Click
// fB = Fun bus
const fB = document.querySelector(".logo-heading");
 fB.addEventListener('dblclick', function(event) {
  event.target.style.color ='red';
  setTimeout(function() {
    event.target.style.color = "";
  }, 300);
})

// Keydown
// B = body
const b = document.querySelector('body');
document.addEventListener("keydown", ()=> {
    b.style.background = '#fbe2d2'
});

// Scroll
// Paragraphs green on scroll
// const paragraphs = document.querySelectorAll("p");
//  paragraphs.addEventListener('scroll', function(event) {
//   event.target.style.color ='green';
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 300);
// })

// Scroll to console log = wheel
window.addEventListener('scroll', () => { 
    console.log('Scrolled');
})
