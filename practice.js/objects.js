class Animal {
    constructor(name. energy){
     this.name = name 
     this.energy = energy
  }
  eat(amount){
    console.log(`${this.name} is eating`)
    this.energy += amount 
    }
  sleep(length){
    console.log(`${this.name} is sleeping`)
    this.energy += length
    }
  play(length){
     console.log(`${this.name} is playing`)
     this.energy -= length
    }
  }
  const leo = new Animal('Leo', 7)
  const prototype = Object.getPrototypeOf(leo)
  console.log(prototype)
  // {constructor: ƒ, eat: ƒ, sleep: ƒ, play: ƒ}
  prototype === Animal.prototype //true