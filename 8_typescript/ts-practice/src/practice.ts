function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

const total = sumArray([1, 2, 3, 4, 5])

interface Shape {
  getArea(): number
}

class Circle implements Shape {
  radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  getArea() {
    return this.radius * this.radius * Math.PI
  }
}

class Rectangle implements Shape {
  width: number
  height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)]

shapes.forEach(shape => {
  console.log(shape.getArea())
})