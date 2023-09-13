// 
class Shape {
    constructor() {
      this._shapeName = "";
    }
  
    set shapeName(name) {
      this._shapeName = name;
    }
  
    get shapeName() {
      return this._shapeName;
    }
  
    calcArea() {
      throw new Error("error calcArea");
    }
  
    calcPerimeter() {
      throw new Error("error calcPerimeter ");
    }
  }
  
  // 
  class Polygon extends Shape {
    constructor(width, height) {
      super();
      this._width = width;
      this._height = height;
    }
  
    get width() {
      return this._width;
    }
  
    set width(width) {
      this._width = width;
    }
  
    get height() {
      return this._height;
    }
  
    set height(height) {
      this._height = height;
    }
  
    calcArea() {
      return this._width * this._height;
    }
  
    calcPerimeter() {
      return 2 * (this._width + this._height);
    }
  }
  
  // 
  class NonPolygon extends Shape {
    constructor(radius) {
      super();
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    calcArea() {
      return Math.PI * this._radius * this._radius;
    }
  
    calcPerimeter() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  // 
  class Rectangle extends Polygon {
    constructor(width, height) {
      super(width, height);
      this.shapeName = "Rectangle";
    }
  }
  
  // 
  class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength, sideLength);
      this.shapeName = "Square";
    }
  }
  
  // 
  class Circle extends NonPolygon {
    constructor(radius) {
      super(radius);
      this.shapeName = "Circle";
    }
  
    
    calcArea() {
      return Math.PI * this._radius ** 2;
    }
  
    calcPerimeter() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  // 
  class Cylinder extends Circle {
    constructor(radius, height) {
      super(radius);
      this._height = height;
    }
  
    get height() {
      return this._height;
    }
  
    set height(height) {
      this._height = height;
    }
  
    calcArea() {
      const baseArea = super.calcArea();
      const lateralArea = 2 * Math.PI * this._radius * this._height;
      return 2 * baseArea + lateralArea;
    }
  
    calcPerimeter() {
      throw new Error("error");
    }
  }
  
  // 
  const rectangle = new Rectangle(5, 10);
  console.log(`${rectangle.shapeName} - masahat: ${rectangle.calcArea()}, mohit: ${rectangle.calcPerimeter()}`);
  
  
  