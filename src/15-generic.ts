function getValue<T>(value: T) {
  return value
}

getValue<number>(15)
getValue<string>("ab")
getValue<number[]>([11, 1, 3])
