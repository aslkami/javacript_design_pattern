class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next() {
    if(this.hasNext()) {
      return this.list[this.index++]
    }
  }
  hasNext() {
    if(this.index >= this.list.length) {
      return false
    }
    return true
  }
}

class Container {
  constructor(list) {
    this.list = list
  }
  genIterator() {
    return new Iterator(this)
  }
}

const c = new Container([1,2,3,4,5,6])
const i = c.genIterator()

while(i.hasNext()) {
  console.log(i.next())
}



function each(data) {
  for(let item of data) {
    console.log(item)
  }
}