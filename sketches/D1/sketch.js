// let shapeId = 0

import { SpringNumber } from "../../shared/spring.js";

const spring = new SpringNumber({
  position: 0, // start position
  frequency: 0.7, // oscillations per second (approximate)
  halfLife: 0.1, // time until amplitude is halved
});

let clickX = 0;
let clickY = 0;
let dragging = false;
let centerX;
let centerY;
let objSize;
let insideCircle;
let mySound;
let prevGridState = "";

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mySound = loadSound("./sound/blob.m4a");
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.mousePressed = function () {
  clickX = mouseX;
  clickY = mouseY;

  if (insideCircle) dragging = true;
};

window.mouseReleased = function () {
  dragging = false;
};

window.draw = function () {
  background(255);

  const sceneSize = min(width, height);

  centerX = width / 2;
  centerY = height / 2;
  objSize = sceneSize / 2;
  insideCircle = dist(mouseX, mouseY, centerX, centerY) < objSize / 2;
  const halfWidth = objSize / tan(60);
  const strokeW = 20;

  let offsetX = 0;
  let offsetY = 0;
  if (dragging) {
    offsetX = mouseX - clickX;
    offsetY = mouseY - clickY;
  }

  fill(0);
  noStroke();
  const gridCountX = ceil(map(abs(offsetX), 1, objSize, 1, 5, true));
  const gridCountY = ceil(map(abs(offsetY), 1, objSize, 1, 5, true));
  // 1 + floor((mouseX / width) * 5);

  const pointSizeX = map(gridCountX, 1, 5, objSize, 20);
  const pointSizeY = map(gridCountY, 1, 5, objSize, 20);
  const pointSize = min(pointSizeX, pointSizeY);

  // const initialCircleSize = 20; // Set the desired size for the initial circle
  // const pointSize = initialCircleSize;

  // Create a string representation of the current grid state
  const currentGridState = `${gridCountX}-${gridCountY}`;

  // Check if the current grid state is different from the previous one
  if (currentGridState !== prevGridState) {
    mySound.play();
    // Update the previous grid state
    prevGridState = currentGridState;
  }

  spring.target = pointSize;
  spring.step(deltaTime / 100); // deltaTime is in milliseconds, we need it in seconds

  for (let x = 1; x <= gridCountX; x++) {
    for (let y = 1; y <= gridCountY; y++) {
      const xPos = map(
        x,
        0,
        gridCountX + 1,
        centerX - objSize,
        centerX + objSize
      );
      const yPos = map(
        y,
        0,
        gridCountY + 1,
        centerY - objSize,
        centerY + objSize
      );
      circle(xPos, yPos, spring.position);
    }
  }

  if (dragging) {
    cursor("grabbing");
  } else {
    cursor(insideCircle ? "grab" : "default");
  }
};
