class MyMath {
  static readonly PI = 3.14
  static max(...numbers: number[]) {
    return numbers[0]
  }
}

console.log(MyMath.PI)
console.log(MyMath.PI)
const max = MyMath.max(10, 5, 7, 2)
console.log(max)
