import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [todos, setTodo] = useState([{
  id: 1,
  title : "go to gym ",
  description: "go to gym"
 },
 {
  id : 2,
  title : "go to gym 2",
  description: "go to gym 2"
 }])

function addTodo(){
  setTodo{[...todos, {
    id : 3,
    title : "go to gym 2",
    description: "go to gym 2"
  }]}
 }
  return (
    <>
      {todos.map((item) => <Todo>Title : {item.todos} Description : {description}</Todo>)}
    </>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}

export default App
