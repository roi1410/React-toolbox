import React from "react";
import { useRef, useState,useEffect } from "react";

function LocalStorege() {
  const Input = useRef();
  const [inputData, setInputData] = useState(localStorage.getItem("key"));
  function handleCklick(data) {
    setInputData(data.current.value)
  }
//   storing data
  useEffect(() => {
    localStorage.setItem("key",JSON.stringify(inputData))
  
  }, [handleCklick])
//   extaracting data
function exstactingData() {
    const localstoregeData=JSON.parse(localStorage.getItem("key"))
    console.log(localstoregeData);
}
// removeData
function removedata() {
    localStorage.removeItem("key")
    // after active press the extact data 

}
  


  return (
   
      <div className="bg-dark-100 w-100% h-100%">
        <div className="flex flex-col h-4 w-fit gap-7">
        <span>Enter stuff to Local Sotorege</span>
        <input
        placeholder="This data going to the localStorege"
          ref={Input}
          className="border-black border bg-cyan-100"
          type="text"
        />
        <button onClick={()=>handleCklick(Input)}  className="btn-primary bg bg-red-900">Send Data</button>
        <button onClick={()=>console.log(inputData)} className="btn-primary">Test</button>
        <button onClick={()=>exstactingData()} className="btn-primary">extarct data</button>
        <button onClick={()=>removedata()} className="btn-primary">removeData</button>
        </div>
      </div>
    
  );
}

export default LocalStorege;
