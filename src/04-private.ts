export class MyDate {
  year: number //el default es public
  month: number //el default es public
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

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
