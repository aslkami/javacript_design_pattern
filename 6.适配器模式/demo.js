class Adaptee {
  ada() {
    return 'fate'
  }
}

class convert {
  constructor() {
    this.adaptee = new Adaptee()
  }
  change() {
    return this.adaptee.ada() + ' stay night'
  }
}


console.log(new convert().change())