import React, { useRef, useEffect } from "react";
import CodeShowCase from "../../components/CodeShowCase";
import {code } from "./../../../codeShowDB.json"

function CloudinerySecWay() {
  const cloudName = "sxbyje53";
  const uploadPreset = "dqesb3ey9";
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName,
      uploadPreset,
      function(error, result) {
        console.log(result);
      },
    });
    console.log(cloudinaryRef.current);
  }, []);
  function handleUplode() {
    widgetRef.current.open();
  }

  return (
    <>
    <button className="btn-primary" onClick={() => handleUplode()}>
      upload
    </button>
    <CodeShowCase code={code.CloudinerySecWay}/>
    </>
  );
}

export default CloudinerySecWay;
