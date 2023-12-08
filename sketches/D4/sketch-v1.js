import { SpringNumber } from "../../shared/spring.js";

window.setup = function () {
  background(255);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.mousePressed = function () {};

let lastValidX = 0;
let lastValidY = 0;

window.draw = function () {
  const sceneSize = min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = sceneSize / 2;
  const halfWidth = objSize / tan(60);
  const strokeW = 20;
  const radius = objSize / 2;

  fill(0);
  noStroke();
  strokeWeight(strokeW);
  stroke(0);
  line(centerX - objSize / 2, centerY, centerX + objSize / 2, centerY);
  line(centerX, centerY - objSize / 2, centerX, centerY + objSize / 2);

  if (mouseIsPressed) {
    let d = dist(mouseX, mouseY, centerX, centerY); // Calculate the distance
    if (d < objSize / 2) {
      lastValidX = mouseX;
      lastValidY = mouseY;
      circle(lastValidX, lastValidY, 100);
      console.log("inside circle");
    } else {
      circle(lastValidX, lastValidY, 100);
      console.log("outside circle");
    }
  }
};

// window.mouse = function () {
//   let d = dist(mouseX, mouseY, centerX, centerY); // Calculate the distance
//   if (d < objSize / 2) {
//     circle(mouseX, mouseY, 50);
//     console.log("Mouse is inside the circle");
//   } else {
//     console.log("Mouse is outside the circle");
//   }
// };

// window.mousePressed = function () {};
