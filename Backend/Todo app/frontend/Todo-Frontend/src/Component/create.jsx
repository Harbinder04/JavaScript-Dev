import { useState } from "react"

export function CreateTodo(props){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  return (
    <div>
        <input id="title" type="text" placeholder="Title" onChange={(e)=>{
          const value = e.target.value;
          setTitle(value);
        }}> </input>
        <br />
        <input type="text" placeholder="Description"  onChange={function(e){
          setDescription(e.target.value);
        }}></input><br />

        <button onClick={ ()=>{
          fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description
            }), 
            headers : {
              "Content-type" : "application/json"
            }
          })
        .then(async function(res){
          const json = await res.json();
          alert("todo added");
        })
      }}
        >Add Todo</button>
    </div>
  )
}