class Circle {
  draw() {
    console.log('draw a circle');
  }
}

class Decorator {
  constructor(className) {
    this.circle = className
  }
  draw() {
    this.circle.draw()
    console.log("Decorator")
  }
}

const circle = new Circle()

const dec = new Decorator(circle)

dec.draw()