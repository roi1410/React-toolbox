import React from "react";
import CodeShowCase from "../../components/CodeShowCase";
import {code} from "../../../codeShowDB.json"
function Selenium() {
 

  window.setTimeout(function () {
    document.getElementById("slow_load").innerHTML =
      "<div  id ='the_slow_image'> <img  src='http://www.seleniumhq.org/images/big-logo.png'> </div>";
  }, 3000);
  return (
    <>
      <h3 className="side-heder">This page will load an image slowly</h3>
      <h2 className="side-heder">Wait for it .....</h2>
      <h2 className="side-heder">Wait for it .....</h2>
      <h2 className="side-heder">Wait for it .....</h2>
      <h2 className="side-heder">Wait for it .....</h2>
      <div id="slow_load"></div>
      <div id="image_holder"></div>
      <input
        onKeyDownCapture={(e) => e.key === "Enter" && console.log("that works")}
        placeholder="roi"
        id="input"
        type="text"
      />
      <p id="test">that works</p>
      <h3 className="side-heder">send value to an input</h3>
      <CodeShowCase
        code={code.inputFind}
      />
      <h3 className="side-heder">implicitly_wait exsample</h3>
      <CodeShowCase
        code={code.implicitly_wait}
      />
      <h3 className="side-heder">condishinalWaints exsample</h3>
      <CodeShowCase
        code={code.ExplictWait}/>
      <h1 className="side-heder">more complex exsample</h1>
      <CodeShowCase
        code={code.chagePasswordSelenium}
      />
    </>
  );
}

export default Selenium;
