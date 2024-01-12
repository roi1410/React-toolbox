import React from "react";
import CodeShowCase from "../CodeShowCase";
import ToggleSwich from "../ToggleSwich";
import { useState } from "react";

const SessionsComponent = () => {
  const array_of_obj = [
    {
      head: "California 123.123.123.123",
      litleHead: "Chrome on macOS",
      svg_D:
        "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    },
    {
      head: "yeden tv",
      litleHead: "Safari on iPhone",
      svg_D:
        "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    },
    {
      head: "Rome 24.456.355.98",
      litleHead: "Safari on iPhone",
      svg_D:
        "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    },
  ];

  const [displaycode, setDisplaycode] = useState(true);
  if (displaycode) {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <div className="flow-root">
            <h3 className="text-xl font-bold dark:text-white">Sessions</h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {array_of_obj.map((element) => {
                return (
                  <li key={element.head} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          className="text-2xl dark:text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d={element.svg_D}
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-semibold text-gray-900 dark:text-white">
                          {element.head}
                        </p>
                        <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                          {element.litleHead}
                        </p>
                      </div>
                      <div className="inline-flex items-center">
                        <button
                          className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  dark:disabled:hover:bg-gray-800 focus:!ring-2 p-0 font-medium rounded-lg"
                          type="button"
                          onClick={() => console.log(element.head)}
                        >
                          <span className="flex items-center rounded-md text-sm px-3 py-2">
                            Revoke
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
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
        <CodeShowCase code={`const array_of_obj = [
    {
      head: "California 123.123.123.123",
      litleHead: "Chrome on macOS",
      svg_D:
        "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    },
    {
      head: "yeden tv",
      litleHead: "Safari on iPhone",
      svg_D:
        "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    },
    {
      head: "Rome 24.456.355.98",
      litleHead: "Safari on iPhone",
      svg_D:
        "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    },
  ];

  const [displaycode, setDisplaycode] = useState(true);
  if (displaycode) {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <div className="flow-root">
            <h3 className="text-xl font-bold dark:text-white">Sessions</h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {array_of_obj.map((element) => {
                return (
                  <li key={element.head} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          className="text-2xl dark:text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d={element.svg_D}
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-semibold text-gray-900 dark:text-white">
                          {element.head}
                        </p>
                        <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                          {element.litleHead}
                        </p>
                      </div>
                      <div className="inline-flex items-center">
                        <button
                          className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  dark:disabled:hover:bg-gray-800 focus:!ring-2 p-0 font-medium rounded-lg"
                          type="button"
                          onClick={() => console.log(element.head)}
                        >
                          <span className="flex items-center rounded-md text-sm px-3 py-2">
                            Revoke
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }`} />
      </>
    );
  }
};

export default SessionsComponent;
