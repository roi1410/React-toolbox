import axios from "axios";
import { useRef } from "react";
// JSON server is used here
function AxiosPost() {
  
  const JSONserver = "http://localhost:3000/posts";

  const sendingData = { Name: "roi", lastName: "revivo" };
  const input=useRef()

  const postData = (input) => {
    const sendObj={vlaue:input.current.value}
    
    axios
      .post(JSONserver, sendObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {console.log(err)});
  };
  
    const fetchData = async () => {
      const response = await axios.get(JSONserver);
      console.log(response.data);
    };
    
   
  

  return (
    <>
      
      <input  ref={input} type="text" className="input-primary w-50" />
      <button  onClick={() => postData(input)} className="btn-primary">
        post data
      </button>
      <button  className="btn-primary" onClick={() =>fetchData() }>console.log(Data)</button>
    </>
  );
}

export default AxiosPost;
