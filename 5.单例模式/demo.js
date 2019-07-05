class Single {
  constructor() {

  }
}


Single.instance =  (function(){
  let instance
  return function(){
    if(!instance) {
      instance = new Single()
    }
    return instance
  }
})()


let obj1 = Single.instance()
let obj2 =  Single.instance()

console.log(obj1 === obj2)