export class Animal {
  constructor(protected name: string) {}
  move() {
    console.log("Moving like an animal")
  }
  greeting() {
    return `Hello I'm ${this.name}`
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name)
  }
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`Woof! ${this.name}`)
    }
  }
  move(): void {
    console.log("Moving like a dog")
    super.move()
  }
}

const animal = new Animal("Animalito")
animal.move()
console.log(animal.greeting())

const boby = new Dog("Boby", "Cesar")
console.log(boby.greeting())
boby.woof(3)
boby.move()
