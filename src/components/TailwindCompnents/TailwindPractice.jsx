import { useState, useEffect, useRef } from "react";
import TaillwindBtn from "./TailwindBtn";
import TailwindDarkmodeBtn from "./TailwindDarkmodeBtn";
import CodeShowCase from "../CodeShowCase";
import {code} from "./../../../codeShowDB.json"

function TaillwindPracice() {
  return (
    <>
      <div className="bg-blue-100 w-full h-full">
        <TailwindDarkmodeBtn />
        <div className="h-10 w-10 bg-cyan-400 dark:bg-black"></div>
        <div className="w-fit">
          <CodeShowCase
            code={code.TailwindDarkmodeBtn}
          />
        </div>

        <h1 className="  tablet : text-primary ">rtyt</h1>
        

        <button className="btn-primary dark:bg-black">custum btn</button>
        <CodeShowCase code={code.custumBTN}/>
  <TaillwindBtn addclassName={"px-10 dark:bg-black "}>
    Tailwindbtn
  </TaillwindBtn>
      </div>
    </>
  );
}

export default TaillwindPracice;
