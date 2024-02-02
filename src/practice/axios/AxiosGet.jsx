import axios from "axios";
import { useEffect, useState } from "react";
import ToggleSwich from "../../components/ToggleSwich";
import CodeShowCase from "../../components/CodeShowCase";
import { code } from "./../../../codeShowDB.json";

function AxiosGet() {
  const [Data, setData] = useState({});
  const [displaycode, setDisplaycode] = useState(true);
  const rickANDmorty = "https://rickandmortyapi.com/api/character";
  
  const APIkey =
    "https://api.polygon.io/v2/aggs/ticker/SOFI/range/1/day/2023-01-09/2024-01-09?adjusted=true&sort=asc&limit=120&api?apiKey=CwfSJcEMC3laN5YuVphUV9JFwRhQBF5U";

  try {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(rickANDmorty);

        setData(response.data);
      };
      // if u wnat to active the condishinal rendering comment  fetchData();

      fetchData();
    }, []);
  } catch (err) {
    console.log(err);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  if (displaycode) {
    if (isEmpty(Data)) {
      return (
        <>
          <div className="flex justify-center items-center ">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <ToggleSwich
            setDisplaycode={setDisplaycode}
            displaycode={displaycode}
          />
          <button className="btn-primary" onClick={() => console.log(Data)}>
            console.log(APIData)
          </button>
          {/* <img src={Data.results[1].image} /> */}
        </>
      );
    }
  } else {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <CodeShowCase code={code.AxiosGet} />
      </>
    );
  }
}

export default AxiosGet;
