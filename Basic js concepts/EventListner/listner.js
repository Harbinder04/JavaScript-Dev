const heading = document.getElementById("heading");
const container = document.getElementById("container");
const btn = document.getElementById("myBtn");
const input = document.querySelector("input");


// EventLisner has various function you can check it out.

btn.addEventListener("click", () => {
    heading.style.backgroundColor = "#af4a4a";
});

// Do function on double click.
// container.addEventListener("dblclick", () => {
//     document.body.style.backgroundColor = "rgb(50, 50, 50";
//     container.style.margin = "10px";
//     container.style.backgroundColor = "#fff";
// });

//   Same

function func1(){
    document.body.style.backgroundColor = "rgb(50, 50, 50";
    container.style.margin = "10px";
    container.style.backgroundColor = "#fff";
}
container.addEventListener("dblclick", func1);

// Changes data on click. 
// input.addEventListener("change", (e)=>{
//     console.log(e.target.value);
// });

btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = "Purple";
    input.value = "Happy";
    container.removeEventListener("dblclick", func1);  // On clicking the button func1 will not work 
});