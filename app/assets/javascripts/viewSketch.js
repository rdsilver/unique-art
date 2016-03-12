'use strict';

var shapeList = [];
var state = 'shapePlacementAndColor';
var bgColor = 50;
var editing = $('#viewing').length !== 0;



function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('viewing');
  background(bgColor);
  noStroke();

  if ($('#viewing') !== [] || $('#edit') !== [])
    createFromData();
}

// For non p5.js users, this methods gets called over and over again
function draw() {
  background(bgColor);
  Shape.displayAllShapes();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function createFromData() {
  _.each($('#viewing').data('string'), newShapeString=>{
    let ns = newShapeString.split(',');
    let c = color(ns[3], ns[4], ns[5]);
    shapeList.push(new Shape(parseInt(ns[0]),parseInt(ns[1]),ns[2],c));
  });
}