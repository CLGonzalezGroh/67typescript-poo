export class MyDate {
  year: number //el default es public
  month: number //el default es public
  public day: number //el default es public

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
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

const myDate = new MyDate(2022, 3, 14)

myDate.day = 15
myDate.month = 4
