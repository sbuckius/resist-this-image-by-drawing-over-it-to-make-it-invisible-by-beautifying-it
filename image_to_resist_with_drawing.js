let img;

// Load the image.
function preload() {
  img = loadImage('images/resist_this_image.png');
}


function setup() {
  
createCanvas(720, 720);
background('#660022');
angleMode (DEGREES);
  textSize(40);
  
  // Draw the image.
  image(img, 30, 30);


}


function draw() {
  
  fill(mouseY,0,mouseX);
  rect(mouseX,mouseY,30,30);
   fill(mouseX,0,mouseX);
  ellipse(mouseY,mouseX,20,20);
  fill(mouseY,50,mouseX);
  triangle(mouseY,mouseX,20,mouseX,20,20);
    fill(10,100,mouseY);
   triangle(mouseX/5,mouseX/2,10,mouseY/7,mouseX,30);
  fill(mouseX/3,20,mouseY);
  ellipse(mouseY,mouseX,mouseX,20);
  
   fill(30,mouseY,220);
  square(mouseY,mouseX*2,mouseX/4);
  text('resist this image', 400, 620);
  

}
