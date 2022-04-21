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

// 일반 객체를 interfaca 로 타입 설정하기

interface Person {
  name: string
  age?: number
}

interface Developer extends Person {
  skills: string[]
}

const person: Person = {
  name: '김사랑',
  age: 20
}

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
}

const people: Person[] = [person, expert]