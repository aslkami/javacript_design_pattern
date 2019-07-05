### 常见场景
1. 网页点击事件 window.addEventListener('click', () => {})
2. promise用法 then
3. jquery里的 $.Callbacks()
- ```javascript
  const $callback = $.Callbacks()
  $callback.add((data)=>{
    console.log(data)
  })
  $callback.fire('fate')
  ```
4. nodejs 自定义事件, EventEmitter, createReadStream