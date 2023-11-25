const title = document.getElementById("title");
const form = document.querySelector("form");
const description = document.getElementById("description");
const container = document.querySelector(".container");
const task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")):[];

showTasks();
function removeTask(){
    task.forEach(()=>{
    const div = document.querySelector(".tasks");
    div.remove();
    });
}

function showTasks(){
    task.forEach((value, index)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "tasks");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const para = document.createElement("p");
        para.innerText = value.title;
        innerDiv.append(para);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "deletebtn");
        btn.innerText = "-";
        btn.addEventListener("click", ()=>{
            removeTask();
            task.splice(index, 1);
            localStorage.setItem("task", JSON.stringify(task));
            showTasks();
        });

        div.append(btn);
        container.append(div);
    });
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    removeTask();
    task.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("task", JSON.stringify(task));
    showTasks();
});