class Product {
  constructor(pro) {
    this.name = pro
  }
  getName() {
    return this.name
  }
}

class Factory {
  create(pro) {
    return new Product(pro)
  }
}


const production = new Factory().create('fate')