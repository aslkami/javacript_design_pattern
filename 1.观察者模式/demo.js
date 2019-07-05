// 发布订阅原理 1对n， 跟医院排队 等叫号一样
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  attach(observer) {
    this.observers.push(observer)
  }
}

class Observer {
  constructor(name, Subject) {
    this.name = name
    this.subject = Subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.state}`);
  }
}

const sub = new Subject()
new Observer("fate", sub)
new Observer('saber', sub)

sub.setState(1)
sub.setState(2)