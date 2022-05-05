export class MyDate {
  constructor(
    public year: number = 1973,
    public month: number = 3,
    private _day: number = 10
  ) {}

  get day() {
    return this.addPadding(this._day)
  }
  get isLeapYear() {
    if (this.year % 400 === 0) return true
    if (this.year % 100 === 0) return false
    return this.year % 4 === 0
  }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  add(amount: number, type: "day" | "month" | "year") {
    if (type === "day") {
      this._day += amount
    }
    if (type === "month") {
      this.month += amount
    }
    if (type === "year") {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2020, 3, 1)
console.log(myDate.day)
console.log(myDate.isLeapYear)
