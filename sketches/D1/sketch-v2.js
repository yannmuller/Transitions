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

  // ------------------- 01 -------------------
  //   fill(0);
  //   noStroke();
  //   const gridCount = 1 + floor((mouseX / width) * 5);
  //   const pointSize = 10;
  //   //   map(gridCount, 1, 5, objSize, 20);

  //   spring.target = pointSize;
  //   spring.step(deltaTime / 1000); // deltaTime is in milliseconds, we need it in seconds

  //   for (let x = 0; x < gridCount; x++) {
  //     for (let y = 0; y < gridCount; y++) {
  //       const xPos = map(
  //         x,
  //         0,
  //         gridCount + 1,
  //         centerX - gridCount * spring.position,
  //         centerX + gridCount * spring.position
  //       );
  //       const yPos = map(
  //         x,
  //         0,
  //         gridCount + 1,
  //         centerY - gridCount * spring.position,
  //         centerY + gridCount * spring.position
  //       );
  //       circle(xPos, yPos, pointSize);
  //     }
  //   }

  // ------------------- 02 -------------------
  //   fill(0);
  //   noStroke();
  //   const gridCount = 1 + floor((mouseX / width) * 5);
  //   const pointSize = 10;
  //   //map(gridCount, 1, 5, objSize, 20)

  //   spring.target = pointSize;
  //   spring.step(deltaTime / 1000); // deltaTime is in milliseconds, we need it in seconds

  //   for (let x = 0; x < gridCount; x++) {
  //     for (let y = 0; y < gridCount; y++) {
  //       const xPos = centerX + map(x, 0, gridCount, -objSize / 2, objSize / 2);
  //       const yPos = centerY + map(y, 0, gridCount, -objSize / 2, objSize / 2);
  //       circle(xPos, yPos, pointSize);
  //     }
  //   }
  //   // const xPos = map(
  //   //   x,
  //   //   0,
  //   //   gridCount + 1,
  //   //   centerX - gridCount * spring.position,
  //   //   centerX + gridCount * spring.position
  //   // );
};
