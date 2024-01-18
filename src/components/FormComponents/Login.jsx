import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ToggleSwich from "../ToggleSwich";
import CodeShowCase from "../CodeShowCase";
import {code} from "./../../../codeShowDB.json"

function Login() {
  // All this forms using react hook forms
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Username: "",
      password: "",
    },
  });
  const [displaycode, setDisplaycode] = useState(true);
  if (displaycode) {
    return (
      <div className="w-full max-w-xs m-9 ">
        <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-black"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <span className="text-red-500 text-xs italic">
              {errors.password && "Please choose a username."}
            </span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              {...register("Username", {
                required: "Username is required",
                validate: {
                  isvalid: (v) => true,
                },
              })}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-noneborder-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", {
                required: "the password is required",
              })}
            />
            <span className="text-red-500 text-xs italic">
              {errors.password && "Please choose a password."}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    );
  }
  else{
    return(
      <>
          <ToggleSwich
          setDisplaycode={setDisplaycode}
          displaycode={displaycode}
        />
        <CodeShowCase code={code.Login}/>
      
      
      
      </>
    )
  }
}

export default Login;
