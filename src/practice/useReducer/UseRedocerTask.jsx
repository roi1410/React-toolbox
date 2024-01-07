import React from "react";

function UseRedocerTask({ todo, removeTodo }) {
  return (
    
      <button
        onClick={() => removeTodo()}
       key={todo.id}
        className="btn-primary"
      >
        {todo.value} {todo.id}
      </button>
    
  );
}

export default UseRedocerTask;
