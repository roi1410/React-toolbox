import { useRef, useReducer } from "react";
import { TodoRedocer } from "./TodoRedocer";
import UseRedocerTask from "./UseRedocerTask";

function UseRedocertodolist() {
  const input = useRef();
  const [state, dispach] = useReducer(TodoRedocer, {
    newtodo: "",
    toDos: [],
    selectedTodo: "",
  });
  return (
    <>
      <h1 className="main-heder">todolist(useReducer)</h1>
      <h2 className="side-heder">add todo</h2>

      <input type="text" ref={input} className="input=primary bg-gray-300 " />

      <button
        onClick={() =>
          dispach({ type: "addTodo", newtodo: input.current?.value })
        }
        className="btn-primary m-7"
      >
        add todo
      </button>
      <button onClick={() => console.log(state)}> console.log(state)</button>
      <div className="flex flex-col w-20 gap-3 flex-wrap">
        {state.toDos.map((todo) => {
          return (
            <UseRedocerTask
              key={todo.id}
              removeTodo={() =>
                dispach({ type: "removeTodo", selectedTodo: todo })
              }
              todo={todo}
            />

      
          );
        })}
      </div>
    </>
  );
}

export default UseRedocertodolist;
