import { useState, useCallback } from "react";
import UseCallbackTodo from "./UseCallbackTodo";
import { code } from "./../../codeShowDB.json";
import ToggleSwich from "../components/ToggleSwich";
import CodeShowCase from "../components/CodeShowCase";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // to understand the benefit of useing usecallback func
  // switch between addTodo func and see which componnent is render

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const [displaycode, setDisplaycode] = useState(true);

  if (displaycode) {
    return (
      <>
        {/* check if the toggle will Efect the other componenets  */}
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <span>
          when the UseCallback componnent is render the addTodo is activet the
          seter that case a chage in the todo and then the react detect a chage
          in the todo compenent and it re rendr <hr></hr>
        </span>
        <span>
          with the using of usecallback depedensy we can control the seter then
          the todo compenenent isnt render because there is no chage
        </span>
        <UseCallbackTodo todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  }
  else{
    return(
      <>
       <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <h1 className="side-heder">UseCallback</h1>
        <CodeShowCase code={code.UseCallback}/>
        <h1 className="side-heder">UseCallbackTodo</h1>
        <CodeShowCase code={code.UseCallbackTodo}/>
      
      
      </>
    )
  }
}

export default UseCallback;
