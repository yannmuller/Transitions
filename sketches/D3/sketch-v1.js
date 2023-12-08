// let shapeId = 0

import { SpringNumber } from "../../shared/spring.js";

const spring = new SpringNumber({
  position: 0, // start position
  frequency: 0.7, // oscillations per second (approximate)
  halfLife: 0.1, // time until amplitude is halved
});

let mySound;
let clickX = 0;
let clickY = 0;
let dragging = false;
let onVertex = false;

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

  if (onVertex) dragging = true;
};

window.mouseReleased = function () {
  dragging = false;
};

window.draw = function () {
  background(255);
  const sceneSize = min(width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = sceneSize / 2;
  const halfWidth = objSize / tan(60);
  const pointSize = 20 + spring.position;
  const strokeW = 20;

  const vertices = [
    createVector(centerX - halfWidth, centerY - halfWidth),
    createVector(centerX, centerY - halfWidth),
    createVector(centerX + halfWidth, centerY - halfWidth),
    createVector(centerX + halfWidth, centerY),
    createVector(centerX + halfWidth, centerY + halfWidth),
    createVector(centerX, centerY + halfWidth),
    createVector(centerX - halfWidth, centerY + halfWidth),
    createVector(centerX - halfWidth, centerY),
  ];

  onVertex = false;
  for (const vertex of vertices) {
    if (dist(mouseX, mouseY, vertex.x, vertex.y) < 25) {
      cursor("grab");
      onVertex = true;
      break;
    } else {
      cursor("default");
    }
  }
  console.log(onVertex);

  if (dragging) {
    cursor("grabbing");
    for (let i = 0; i < vertices.length; i++) {
      if (dist(mouseX, mouseY, vertices[i].x, vertices[i].y) < halfWidth / 2) {
        vertices[i].x = mouseX;
        vertices[i].y = mouseY;
      }
    }
  }

  beginShape();
  fill(0);
  for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);

  strokeWeight(4);
  circle(centerX, centerY, 1);

  // strokeWeight(4);
  // stroke(51);
  // noFill();
  // beginShape();
  // // vertex(mouseX, mouseY);
  // vertex(centerX - halfWidth, centerY - halfWidth);
  // vertex(centerX, centerY - halfWidth);
  // vertex(centerX + halfWidth, centerY - halfWidth);
  // vertex(centerX + halfWidth, centerY);
  // vertex(centerX + halfWidth, centerY + halfWidth);
  // vertex(centerX, centerY + halfWidth);
  // vertex(centerX - halfWidth, centerY + halfWidth);
  // vertex(centerX - halfWidth, centerY);
  // endShape(CLOSE);

  // rectMode(CENTER);
  // rect(centerX, centerY, objSize, objSize);

  // mySound.play();

  spring.target = pointSize;
  spring.step(deltaTime / 100); // deltaTime is in milliseconds, we need it in seconds

  // tracking mouse
  // fill(255, 0, 0);
  // noStroke();
  // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
};
