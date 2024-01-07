import axios from "axios";
import { useEffect, useState } from "react";

function AxiosGet() {
  const [Data, setData] = useState({});

  try {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

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
        <button className="btn-primary" onClick={() => console.log(Data)}>
          console.log(APIData)
        </button>
        <img src={Data.results[1].image} />
      </>
    );
  }
}

export default AxiosGet;
