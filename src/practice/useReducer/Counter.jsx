import { reducer } from "./Reducer";
import { useReducer, useRef, useState } from "react";
import { code } from "./../../../codeShowDB.json";
import CodeShowCase from "../../components/CodeShowCase";
import ToggleSwich from "../../components/ToggleSwich";

function Counter() {
  const input = useRef();
  //  first var is the state sec var is a func that active the swichCase and setting the action
  // call the spesific reducer func
  // choose inital value for ech var
  const [state, dispatch] = useReducer(reducer, {
    age: 42,
    Name: "initial value",
  });
  const [displaycode, setDisplaycode] = useState(true);

  if (displaycode) {
    return (
      <>
        {/* check if the toggle will Efect the other componenets  */}
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />

        <button
          onClick={() => {
            // heare we seting in the action obj the type of the opertion
            dispatch({ type: "incremented_age" });
          }}
          className="btn-primary"
        >
          Increment age
        </button>

        <div>state.age= {state.age}</div>
        <button
          onClick={() => {
            dispatch({ type: "deincremented_age" });
          }}
          className="btn-primary"
        >
          deincremented_age
        </button>
        <input
          type="text"
          ref={input}
          className="input-primary w-20 bg-slate-400"
        />
        <div>state.Name= {state.Name}</div>

        <button
          onClick={() => {
            // changing  the the value on the name in the action obj to acecs it in the redocer
            dispatch({ type: "renderChange", Name: input.current.value });
          }}
          className="btn-primary"
        >
          nextname
        </button>
        <button
          onClick={() => {
            console.log(state);
          }}
          className="btn-primary"
        >
          print state
        </button>

        {/* why the defultvalue dont change when we use the dispach func renderChange  */}
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
        <h1 className="side-heder">Counter</h1>
        <CodeShowCase code={code.Counter}/>
        <h1 className="side-heder">Reducer</h1>
        <CodeShowCase code={code.Reducer}/>

      
      </>
    )
  }
  
}
export default Counter;
