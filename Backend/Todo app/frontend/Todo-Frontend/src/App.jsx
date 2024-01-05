import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Component/create'
import { Todos } from './Component/todo'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
     const json = await res.json();
     setTodos(json.todos);
  });

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
