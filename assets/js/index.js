console.log("Start coloring!");

var circles = document.querySelectorAll(".circle"); 
var boxes = document.querySelectorAll(".box");
var currentColorBox = document.querySelector(".currentColorBox"); 

for (var i=0;i<circles.length;i++) {
    circles[i].addEventListener("click", function() { 
      var currentColor = window.getComputedStyle(this).backgroundColor;
      currentColorBox.style.backgroundColor = currentColor; 
    })
  }
  
for (var i=0;i<boxes.length;i++) {
    boxes[i].addEventListener("click", function() {
    var currentColor = window.getComputedStyle(currentColorBox).backgroundColor;
    this.style.backgroundColor = currentColor;
  })
}
