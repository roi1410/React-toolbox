import React from "react";
import CodeShowCase from "../CodeShowCase";
import ToggleSwich from "../ToggleSwich";
import { useState } from "react";

function ChangePicture() {
  const [displaycode, setDisplaycode] = useState(true);
  if (displaycode) {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <div
          className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
          data-testid="flowbite-card"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
              <img
                alt=""
                src="https://rb.gy/0t2u0m"
                className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
              />

              <div>
                <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                  Jese Leos
                </h3>
                <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Software Engineer
                </div>
                <button>change picture</button>
              </div>
            </div>
          </div>
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
        <CodeShowCase code={`<div
          className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
          data-testid="flowbite-card"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
              <img
                alt=""
                src="https://rb.gy/0t2u0m"
                className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
              />

              <div>
                <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                  Jese Leos
                </h3>
                <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Software Engineer
                </div>
                <button>change picture</button>
              </div>
            </div>
          </div>
        </div>`} />
      </>
    );
  }
}

export default ChangePicture;
