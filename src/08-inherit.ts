class Animal {
  constructor(public name: string) {}
  move() {
    console.log("Hey I'm moving")
  }
  greeting() {
    return `Hello I'm ${this.name}`
  }
}

class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name)
  }
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log("Woof!")
    }
  }
}

const animal = new Animal("Animalito")
animal.move()
console.log(animal.greeting())

const boby = new Dog("Boby", "Cesar")
boby.move()
console.log(boby.greeting())
boby.woof(3)
