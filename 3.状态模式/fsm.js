import StateMachine from "javascript-state-machine"
const fsm = new StateMachine({
  init: "收藏",
  transition: [
    {
      name: "doStore",
      from: "收藏",
      to: "取消收藏"
    },
    {
      name: "deleteStore",
      from: "取消收藏",
      to: "收藏"
    }
  ],
  methods: {
    onDoStore() {
      alert("收藏成功！")
      updateText()
    },
    onDeleteStore() {
      alert("取消收藏成功！")
      updateText()
    }
  }
})

btn.addEventListener("click", _ => {
  if (fsm.is("收藏")) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

function updateText() {
  btn.innerText(fsm.state)
}

updateText()