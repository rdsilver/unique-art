'use strict';

class Shape {
	constructor(x, y, shapeType, color) {
		this.x = x;
		this.y = y;
    this.shapeType = shapeType;
    this.color = color;
    this.size = 100;
	}

	display() {
    fill(this.color);

    switch (this.shapeType) {
      case 'square':
        rect(this.x, this.y, this.size, this.size);
        break;
      case 'circle':
        ellipse(this.x, this.y, this.size, this.size);
        break;
      case 'triangle':
        triangle(this.x+this.size/2, this.y+this.size/2, this.x-this.size/2, this.y+this.size/2, this.x, this.y-this.size/2);
        break;
    }
	}

  reColor() {
    this.color = color(_.random(0, 255), _.random(0, 255), _.random(0, 255));
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  // Helper Methods
	static displayAllShapes() {
    _.each(shapeList, s => {
      s.display();
    })
	}

  static checkHit(mousex, mousey) {
    var index = -1;

    _.each(shapeList, (shape, shapeIndex) => {
        switch (shape.shapeType) {
          case 'square':
            if (collidePointRect(mousex, mousey, shape.x-shape.size/2, shape.y-shape.size/2, shape.size, shape.size)) {
              index = shapeIndex;
              return;
            }
            break;
          case 'circle':
            if (collidePointCircle(mousex, mousey, shape.x, shape.y, shape.size)) {
              index = shapeIndex;
              return;
            }
            break;
          case 'triangle':
            if (collidePointTriangle(mousex, mousey, shape.x+shape.size/2, shape.y+shape.size/2, shape.x-shape.size/2, shape.y+shape.size/2, shape.x, shape.y-shape.size/2)) {
              index = shapeIndex;
              return;
            }
            break;
        }
    });

    return index;
  }

  static newShape(x, y) {
    let shapeType = _.sample(['square', 'circle', 'triangle']);
    let randColor = color(_.random(0, 255), _.random(0, 255), _.random(0, 255));
    shapeList.push(new Shape(x, y, shapeType, randColor));
  }
}