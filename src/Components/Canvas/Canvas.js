// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
//     c.fill();
//   };

//   this.update = function() {
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > innerWidth || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//   };
// }

// var circleArray = [];

// for (var i = 0; i < 100; i++) {
//   var radius = 30;

//   var x = Math.random() * (innerWidth - radius * 2) + radius;
//   var y = Math.random() * (innerHeight - radius * 2) + radius;
//   var dx = Math.random() - 0.5 * 6;
//   var dy = Math.random() - 0.5 * 6;
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }

// console.log("cccc", circleArray);

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }

// animate();

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

function typeOut(str, startX, startY, lineHeight, padding) {
  "use strict";
  var cursorX = startX || 0;
  var cursorY = startY || 0;
  var lineHeight = lineHeight || 32;
  padding = padding || 10;
  var i = 0;
  var $_inter = setInterval(function() {
    var rem = str.substr(i);
    var space = rem.indexOf(" ");
    space = space === -1 ? str.length : space;
    var wordwidth = c.measureText(rem.substring(0, space)).width;
    var w = c.measureText(str.charAt(i)).width;
    if (cursorX + wordwidth >= canvas.width - padding) {
      cursorX = startX;
      cursorY += lineHeight;
    }
    c.fillText(str.charAt(i), cursorX, cursorY);
    i++;
    cursorX += w;
    if (i === str.length) {
      clearInterval($_inter);
    }
  }, 75);
}

make_base();
function make_base() {
  let base_image = new Image();
  base_image.src = "typing.png";

  base_image.onload = function() {
    c.drawImage(base_image, canvas.width / 2 - 250, canvas.height / 2 - 80);
  };

  c.fillStyle = "white";
  c.font = "24px sans-serif";
  var str = "Hi, This is IAN DSOUZA, I am a Full Stack Developer . . .";
  typeOut(
    str,
    canvas.width / 2 - 200,
    canvas.height / 2 - 130,
    32,
    canvas.width / 2 - 200
  );
}

function vscodebutton(x, y, radius, color) {
  c.beginPath();
  c.fillStyle = color;
  c.arc(x, y, radius, 0, Math.PI * 2, false);

  c.fill();
  c.closePath();
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

c.fillStyle = "#1B242F";
c.fillRect(canvas.width / 2 - 210, canvas.height / 2 - 220, 420, 322);
c.closePath();

c.fillStyle = "#575a5b";
c.fillRect(canvas.width / 2 - 210, canvas.height / 2 - 220, 420, 25);
c.closePath();

vscodebutton(canvas.width / 2 - 200, canvas.height / 2 - 206, 7, "#f44336");
vscodebutton(canvas.width / 2 - 180, canvas.height / 2 - 206, 7, "#fbc02d");
vscodebutton(canvas.width / 2 - 160, canvas.height / 2 - 206, 7, "#00c853");

c.fillStyle = "black";
roundedRect(c, canvas.width / 2 - 225, canvas.height / 2 - 240, 450, 350, 15);
roundedRect(c, canvas.width / 2 - 225, canvas.height / 2 - 240, 451, 351, 15);
roundedRect(c, canvas.width / 2 - 225, canvas.height / 2 - 240, 452, 352, 15);
roundedRect(c, canvas.width / 2 - 225, canvas.height / 2 - 240, 453, 353, 15);
roundedRect(c, canvas.width / 2 - 225, canvas.height / 2 - 240, 454, 354, 15);

c.beginPath();
c.beginPath();
c.arc(
  canvas.width / 2,
  canvas.height / 2 + 100,
  80,
  0.3,
  0.9 * Math.PI,
  "",
  true
);
c.fillStyle = "";
c.lineWidth = 2;
c.fill();
