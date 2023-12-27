import axios from "axios";
import React, { useState } from "react";

function UploadWidget() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState("");

  const presetKey = "sxbyje53";
  const cloudName = "dqesb3ey9";

  const handleFile = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const uploadImg = () => {
    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", presetKey);

      axios
        .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
        .then((res) => setUrl(res))
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <input type="file" onChange={handleFile} />
        <button className="btn-primary" onClick={() => uploadImg()}>
          Upload
        </button>
        <br />
        <button className="btn-primary" onClick={() => console.log(url)}>
          Log URL
        </button>
        {url && <img src={url.data.secure_url} alt="pls enter an img" />}
      </div>
    </>
  );
}

export default UploadWidget;
