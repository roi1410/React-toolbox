import React from "react";

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
      <div  id="slow_load"></div>
      <div id="image_holder"></div>
      <input onKeyDownCapture={(e)=>e.key==="Enter"&&console.log("that works")} placeholder="roi" id="input" type="text" />
      <p id="test">that works</p>
    </>
  );
}

export default Selenium;
