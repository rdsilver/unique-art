'use strict';

var shapeList = [];
var state = 'shapePlacementAndColor';
var bgColor = 50;
var selectedShape;
var editing = $('#viewing').length !== 0;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight-140);
  background(bgColor);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  createFromData();
}

// For non p5.js users, this methods gets called over and over again
function draw() {
  background(bgColor);
  Shape.displayAllShapes();
}

function clearGrid() {
  fill(bgColor);
  noStroke();
  rect(0, 0, width, height);
}

function mouseClicked() {
  if (mouseY < 0 || mouseY > height || editing)
    return;

  switch(state) {
    case 'shapePlacementAndColor':
      var potentialHitIndex = Shape.checkHit(mouseX, mouseY);
      if(potentialHitIndex >= 0) {
        shapeList[potentialHitIndex].reColor();
      } else {
        Shape.newShape(mouseX, mouseY);
      }
      break;
  }
}

function mouseDragged() {
  if (mouseY < 0)
    return;

  switch(state) {
    case 'drag':
        if(selectedShape !== undefined) {
          selectedShape.move(mouseX, mouseY);
        }
      break;
  }
}

function mousePressed() {
  var potentialHitIndex = Shape.checkHit(mouseX, mouseY);
  if (potentialHitIndex >= 0) {
    selectedShape = shapeList[potentialHitIndex];
  }
}

function mouseReleased() {
  selectedShape = undefined;
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - 140);
  clearGrid();
}

function createFromData() {
  _.each($('#edit').data('string'), newShapeString=>{
    let ns = newShapeString.split(',');
    let c = color(ns[3], ns[4], ns[5]);
    shapeList.push(new Shape(parseInt(ns[0]),parseInt(ns[1]),ns[2],c));
  });
}