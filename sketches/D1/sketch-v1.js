// let shapeId = 0

import { SpringNumber } from "../../shared/spring.js";

const spring = new SpringNumber({
  position: 0, // start position
  frequency: 4.5, // oscillations per second (approximate)
  halfLife: 0.15, // time until amplitude is halved
});

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

// window.mouseClicked = function () {
//     shapeId++
//     shapeId %= 4
// }

window.draw = function () {
  background(255);

  const sceneSize = min(width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = sceneSize / 2;
  const halfWidth = objSize / tan(60);
  const strokeW = 20;

  fill(0);
  noStroke();
  const gridCount = 1 + floor((mouseX / width) * 5);
  const pointSize = map(gridCount, 1, 5, objSize, 20);

  spring.target = pointSize;
  spring.step(deltaTime / 1000); // deltaTime is in milliseconds, we need it in seconds

  for (let x = 1; x <= gridCount; x++) {
    const xPos = map(x, 0, gridCount + 1, centerX - objSize, centerX + objSize);

    // const xPos = map(
    //   x,
    //   0,
    //   gridCount + 1,
    //   centerX - gridCount * spring.position,
    //   centerX + gridCount * spring.position
    // );

    circle(xPos, centerY, spring.position);
  }

  console.log;
  // 5*1 GRID
  //   fill(0);
  //   noStroke();
  //   circle(centerX, centerY, halfWidth / 2);
  //   circle(centerX + halfWidth * 1, centerY, halfWidth / 2);
  //   circle(centerX - halfWidth * 1, centerY, halfWidth / 2);
  //   circle(centerX + halfWidth * 2, centerY, halfWidth / 2);
  //   circle(centerX - halfWidth * 2, centerY, halfWidth / 2);

  //   GRID;
  //   fill(0);
  //   noStroke();
  //   const gridCount = 5;
  //   const pointSize = strokeW;
  // for (let y = 0; y < gridCount; y++) {
  //   const xPos = map(
  //     x,
  //     0,
  //     gridCount - 1,
  //     centerX - objSize / 2,
  //     centerX + objSize / 2,
  //     x
  //   );
  //   const yPos = map(
  //     y,
  //     0,
  //     gridCount - 1,
  //     centerY - objSize / 2,
  //     centerY + objSize / 2,
  //     y
  //   );
  //   circle(xPos, yPos, pointSize);
  // }
};
