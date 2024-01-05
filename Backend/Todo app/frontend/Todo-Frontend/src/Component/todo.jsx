export function Todos({todos}){
    return(
        <>
        {todos.map(function (todo){
          return <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>{}todo.complete == true ? "Done" : "Mark as Complete"</button>
          </div>
        })}
        </>
    )
}