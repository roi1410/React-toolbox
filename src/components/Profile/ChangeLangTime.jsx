import React from "react";
import { useForm } from "react-hook-form";
import CodeShowCase from "../CodeShowCase";
import ToggleSwich from "../ToggleSwich";
import { useState } from "react";

function ChangeLangTime() {
  const { handleSubmit, register } = useForm();

  const [displaycode, setDisplaycode] = useState(true);
  if (displaycode) {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        {/* need to conntect reactHookForms  */}

        <form
          className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
          data-testid="flowbite-card"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <h3 className="text-xl font-bold dark:text-white">
              Language & Time
            </h3>

            {/* <!-- Language Selection --> */}
            <div className="mb-1 grid grid-cols-1 gap-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Select language
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <select
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="settings-language"
                    name="Language"
                    {...register("Language")}
                  >
                    <option>English (US)</option>
                    <option>Italiano</option>
                    <option>Français (France)</option>
                    <option>正體字</option>
                    <option>Español (España)</option>
                    <option>Deutsch</option>
                    <option>Português (Brasil)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Timezone Selection --> */}
            <div className="mb-3 grid grid-cols-1 gap-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Time Zone
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <select
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="timezone"
                    name="settings-timezone"
                    {...register("timezone")}
                  >
                    <option>GMT+0 Greenwich Mean Time (GMT)</option>
                    <option>GMT+1 Central European Time (CET)</option>
                    <option>GMT+2 Eastern European Time (EET)</option>
                    <option>GMT+3 Moscow Time (MSK)</option>
                    <option>GMT+5 Pakistan Standard Time (PKT)</option>
                    <option>GMT+8 China Standard Time (CST)</option>
                    <option>
                      GMT+10 Eastern Australia Standard Time (AEST)
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Save Button --> */}
            <button type="submit">save Data</button>
          </div>
        </form>
      </>
    );
  }
  else {
    return (
      <>
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <CodeShowCase
          code={`<form
          className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
          data-testid="flowbite-card"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <h3 className="text-xl font-bold dark:text-white">
              Language & Time
            </h3>

            {/* <!-- Language Selection --> */}
            <div className="mb-1 grid grid-cols-1 gap-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Select language
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <select
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="settings-language"
                    name="Language"
                    {...register("Language")}
                  >
                    <option>English (US)</option>
                    <option>Italiano</option>
                    <option>Français (France)</option>
                    <option>正體字</option>
                    <option>Español (España)</option>
                    <option>Deutsch</option>
                    <option>Português (Brasil)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Timezone Selection --> */}
            <div className="mb-3 grid grid-cols-1 gap-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Time Zone
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <select
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="timezone"
                    name="settings-timezone"
                    {...register("timezone")}
                  >
                    <option>GMT+0 Greenwich Mean Time (GMT)</option>
                    <option>GMT+1 Central European Time (CET)</option>
                    <option>GMT+2 Eastern European Time (EET)</option>
                    <option>GMT+3 Moscow Time (MSK)</option>
                    <option>GMT+5 Pakistan Standard Time (PKT)</option>
                    <option>GMT+8 China Standard Time (CST)</option>
                    <option>
                      GMT+10 Eastern Australia Standard Time (AEST)
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Save Button --> */}
            <button type="submit">save Data</button>
          </div>
        </form>
      </>`}
        />
      </>
    );
  }
}

export default ChangeLangTime;
