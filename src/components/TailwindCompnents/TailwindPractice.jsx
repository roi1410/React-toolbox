import { useState, useEffect, useRef } from "react";
import TaillwindBtn from "./TailwindBtn";
import TailwindDarkmodeBtn from "./TailwindDarkmodeBtn";

function TaillwindPracice() {
  return (
    <>
      <div>
        <TailwindDarkmodeBtn />
        <div className="h-10 w-10 bg-cyan-400 dark:bg-black"></div>

        <h1 className="  tablet : text-primary ">rtyt</h1>
        <TaillwindBtn addclassName={"px-10 dark:bg-black "}>
          Tailwindbtn
        </TaillwindBtn>
        <TaillwindBtn addclassName={"bg-red-500 dark:bg-black "}>
          Tailwindbtn2
        </TaillwindBtn>

        <button className="btn-primary dark:bg-black">custum btn</button>
      </div>
    </>
  );
}

export default TaillwindPracice;
