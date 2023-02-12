class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return `The radius is ${this.radius}`;
  }
  setRadius(radi) {
    this.radius = radi;
  }
  getColor() {
    return `The color is ${this.color}`;
  }
  setColor(favoriteColor) {
    this.color = favoriteColor;
  }
  getArea() {
    return `The area is ${Math.PI * Math.pow(this.radius, 2)}`;
  }
  getCircumference() {
    return `The Circumference is ${2 * Math.PI * this.radius}`;
  }
}
const circleValue = new Circle(10, "red");
console.log(circleValue.getRadius());
console.log(circleValue.getColor());
console.log(circleValue.getArea());
console.log(circleValue.getCircumference());
