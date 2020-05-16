// @flow

const { inspect } = require('util')
const instance = require('../instance')

class Shape {
  get area() {
    return 0
  }
}

class Circle extends Shape {
  /*:: r: number */
  constructor(r /*: number */) {
    super()
    this.r = r
  }
  get area() {
    return Math.PI * (this.r ** 2)
  }
}

class Square extends Shape {
  /*:: w: number */
  constructor(w /*: number */) {
    super()
    this.w = w
  }
  get area() {
    return this.w ** this.w
  }
}

const shapeOf /*: ({| type: 'circle', r: number |} | {| type: 'square', w: number |}) => Square | Circle */ =
  value => {
    switch (value.type) {
      case 'circle': return new Circle(value.r)
      case 'square': return new Square(value.w)
      default:
        throw new TypeError(`Don't know how to construct ${inspect(value)}.`)
    }
  }

test('instance', () => {
  instance(Circle)(shapeOf({ type: 'circle', r: 3 }))
  instance(Shape)(shapeOf({ type: 'circle', r: 1 }))
  expect(() => instance(Circle)(shapeOf({ type: 'square', w: 1 })))
    .toThrow('Expected Square { w: 1 } to be instance of [Function: Circle].')
})
