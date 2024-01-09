export function Todos(props){  // good practice is to use destructor {todos}
    return(
        <>
        {props.todos.map(function (todo){
          return <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>{todo.completed == true ? "Done" : "Mark as Complete"}</button>
          </div>
        })}
        </>
    )
}