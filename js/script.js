const FPS = 60; //frames per seconds
let bSize = 20; //size of the inner box
let xAxis, yAxis; //co-ordinates
let xVelocity, yVelocity; //velocity of the box to move in each direction
let canvas, context; //Html Canvas

//load html canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//setInterval
setInterval(move, 1000 / FPS);

//initial position of the box
xAxis = bSize / 2;
yAxis = bSize / 2;

//velocity at which the box moves
xVelocity = 1;
yVelocity = 1;

//function to move the inner box
function move() {
  xAxis += xVelocity;
  yAxis += yVelocity;

  if (xAxis - bSize / 2 < 0 && xVelocity < 0) {
    xVelocity = -xVelocity;
  }
  if (xAxis + bSize / 2 > canvas.width && xVelocity > 0) {
    xVelocity = -xVelocity;
  }
  if (yAxis - bSize / 2 < 0 && yVelocity < 0) {
    yVelocity = -yVelocity;
  }
  if (yAxis + bSize / 2 > canvas.height && yVelocity > 0) {
    yVelocity = -yVelocity;
  }

  context.fillStyle = "#ffc8d0";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#000000";
  context.fillRect(xAxis - bSize / 2, yAxis - bSize / 2, bSize, bSize);
}
