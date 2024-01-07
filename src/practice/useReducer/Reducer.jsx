 export function reducer(state, action) {
    // we can  make manipultion on the state obj ,depending on the needed action .
  switch (true) {
    
    case action.type === "incremented_age":
      return {
        age: state.age + 1,
        
        Name: state.Name,
      };

    case action.type === "deincremented_age":
      return {
        age: state.age - 1,
        Name: state.Name,
      };


    // in the folowing case we can see that we just need to render a new value
    case action.type === "renderChange":
      return {
        age: state.age,
        // after we set the new value for action.name in the dispach func 
        Name: action.Name,
       

      };
     

    default:
      throw Error("Unknown action.");
  }
}