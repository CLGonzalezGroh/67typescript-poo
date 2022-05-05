export class MyDate {
  constructor(
    public year: number = 1973,
    public month: number = 3,
    private day: number = 10
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }
  getDay() {
    return this.addPadding(this.day)
  }

  add(amount: number, type: "day" | "month" | "year") {
    if (type === "day") {
      this.day += amount
    }
    if (type === "month") {
      this.month += amount
    }
    if (type === "year") {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2022, 3, 1)

// myDate.day = 15
// myDate.addPadding(5)
console.log(myDate.printFormat())
console.log(myDate.getDay())
const myDate2 = new MyDate()
console.log(myDate2.printFormat())
const myDate3 = new MyDate(2022)
console.log(myDate3.printFormat())
const myDate4 = new MyDate(2022, 5)
console.log(myDate4.printFormat())
