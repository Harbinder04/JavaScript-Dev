const title = document.getElementById("title");
const form = document.querySelector("form");
const description  = document.getElementById("description");
const container = document.querySelector(".container");
const tasks = [];

showTask();
function removeTask(){
  tasks.forEach(()=>{
    const div = document.quereySelector(".tasks");
    div.remove();
  });
}

function showTask(){
  tasks.forEach((value, index)=>{ //how to write forEach loop.
    const div = document.createElement("div");
    div.setAttribute("class", "tasks");
    
    const innerdiv = document.createElement("div");
    div.append(innerdiv);

    const para = document.createElement("p");
    para.innerText = value.title;
    innerdiv.append(para);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("id", "delbtn");
    btn.innerText = "-";
    btn.addEventListener("click", ()=>{
      // made remove task function 
      removeTask();
      tasks.splice(index, 1);
      localStorage.setIntem("task", JSON.stringify(tasks));
      showTask();
    });
    div.append(btn);
    container.append(div);
    
  });

}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  removeTask();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  showTask(); 
});


