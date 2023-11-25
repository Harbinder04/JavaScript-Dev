const input = document.getElementById("myInput");
const btn = document.getElementById("btn");
const deletebtn = document.getElementById("delbtn");

// Session storage stores locally in the tab.
const btnClick = () =>{
    sessionStorage.setItem("key1", input.value);
};

btn.addEventListener("click", btnClick);
deletebtn.addEventListener("click", ()=>{
    sessionStorage.clear();
});

if(sessionStorage.getItem("key1")){
alert(sessionStorage.getItem("key1"));
}