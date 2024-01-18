import axios from "axios";
import { useRef, useState } from "react";
import ToggleSwich from "../../components/ToggleSwich";
import CodeShowCase from "../../components/CodeShowCase";
import { code } from "./../../../codeShowDB.json";
import { useNavigate } from "react-router-dom";

// JSON server is used here
function AxiosPost() {
  const Navigate = useNavigate();
  const [displaycode, setDisplaycode] = useState(true);

  const JSONserver = "http://localhost:3000/posts";

  const sendingData = { Name: "roi", lastName: "revivo" };
  const input = useRef();

  const postData = (input) => {
    try {
      const sendObj = { vlaue: input.current.value };

      axios
        .post(JSONserver, sendObj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (errr) {
      console.log(errr);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(JSONserver);
    console.log(response.data);
  };
  function redarectJsonServer() {
    Navigate("/jsonServerMain");
  }

  if (displaycode) {
    return (
      <div className="bg-gray-400 h-screen w-full">
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <h1 className="side-heder">
          {" "}
          start JSONserver for a server to post into it{" "}
        </h1>
        <span
          onClick={() => Navigate("/jsonServerMain")}
          className="text-cyan-400 cursor-pointer"
        >
          press here for a gaide
        </span>
        <input ref={input} type="text" className="input-primary w-50" />
        <button onClick={() => postData(input)} className="btn-primary">
          post data
        </button>
        <button className="btn-primary" onClick={() => fetchData()}>
          console.log(Data)
        </button>
      </div>
    );
  } else {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        ;
        <CodeShowCase code={code.AxiosPost} />
      </>
    );
  }
}

export default AxiosPost;
