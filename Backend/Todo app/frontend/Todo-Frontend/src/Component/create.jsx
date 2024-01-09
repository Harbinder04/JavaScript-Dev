import { useState } from "react"

export function CreateTodo(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
        <input id="title" type="text" placeholder="Title" onChange={function(e){
          // const value = e.target.value;
          setTitle(e.target.value);
        }} />
        <br />
        <input id="description" type="text" placeholder="Description"  onChange={function(e){
          setDescription(e.target.value);
        }} />
        <br />

        <button onClick={ ()=>{
          fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
              completed : false
            }), 
            headers : {
              "Content-type" : "application/json"
            }
          })
        .then(async function(res){
          const json = await res.json();
          confirm(json)
        })
      }}
        >Add Todo</button>
    </div>
  )
}