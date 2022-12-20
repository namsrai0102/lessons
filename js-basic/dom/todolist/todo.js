const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

const cardItem = (text) =>{ 
    const item = `
                <div class="task">
                    <input type="text" class="text" readonly value="${text}" />
                    <div class="actions">
                        <button class="edit"><i class="fas fa-pen"></i></button>
                        <button class="done"><i class="fas fa-check"></i></button>
                        <button class="delete"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    return item;
}

const taskAdd = () => {
    let text = inputText.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{

        taskList.innerHTML += cardItem(text);
    }
}

addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
})
// const allTask = [];

const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let text = inputText.value;
  allTask.push(text);
  renderTodoApp();
};

addBtn.addEventListener("click", addTodo);

const deleteTodo = (index) => {
  console.log("II", index);
  allTask.splice(index, 1);
  renderTodoApp();
};
const allTask=[
    {name: "JS", status: true, priority: "high"},
    {name: "HTML", status: false, priority: "high"},
]
const renderTodoApp = () => {
  //AllTask array aar delgetsend list haruulna
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    const done =allTask[i].status ? "strikethrough" : "";
    const item = `   
                <div class="task">
                    <input type="text" class="text ${done} " readonly value="${allTask[i]}" />
                    <div class="actions">
                        <button class="edit"><i class="fas fa-pen"></i></button>
                        <button class="done"><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    taskList.innerHTML += item;
  }
};