/* 
global createCanvas, random, score, mouseX, mouseY, dist, text, textSize, ellipse, background, showPosition, circle, fill, xposition, loadImage, image, imageMode, CENTER, tint, 
*/

let x = 200;
let y = 0;
let diameter = 20;
let speed = 0.5;
let catcherDiameter = 40;
let distance ;
let score = 0

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(95, 154, 217);
  fill(20,130,70);
  y = y + speed;
  ellipse(x,y,diameter,diameter);
  fill(255,255,255,80);
  textSize(20);
 text('Score:' + score, 10, 30);
  
  ellipse(mouseX, mouseY, catcherDiameter, catcherDiameter);
  distance = dist(x,y,mouseX,mouseY);
  print('distance = ' + distance);
  if (distance < 20){
    y = 0;
    x = random(0,400);
    speed = random (0.5,4);
    diameter = random(10,30)
    score = score + 1
  }
  if (y >= 400){
    score = score - 1
    y = 0
  }
}


