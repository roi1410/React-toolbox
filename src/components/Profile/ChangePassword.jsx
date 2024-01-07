import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ChangePassword() {
  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [Password, setPassword] = useState("");

  const handleSubmitedForm = (data) => {
    setPassword(data);
  };

  return (
    <>
      <div
        className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
        data-testid="flowbite-card"
      >
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <h3 className="mb-4 text-xl font-bold dark:text-white">
            Password information
          </h3>
          <form onSubmit={handleSubmit((data) => handleSubmitedForm(data))}>
            <div className="grid grid-cols-6 gap-6">
              {/* <!-- Current Password --> */}
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Current password
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                      id="current-password"
                      name="current-password"
                      placeholder="••••••••"
                      type="password"
                      {...register("current-password")}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- New Password --> */}
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  New password
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    
                      name="new-password"
                      placeholder="••••••••"
                      type="password"
                      {...register("new-password")}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Confirm Password --> */}
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Confirm password
                </label>
                {errors.confirm_password?.message && (
                  <span className="text-red-500">
                    {errors.confirm_password.message}
                  </span>
                )}

                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                      
                      name="confirm-password"
                      placeholder="••••••••"
                      type="password"
                      {...register("confirm_password", {
                        required: "password is requierd",
                        validate: {
                          consfirmPassword: (v) => {
                            if (watch("new-password") !== v) {
                              return "the password isnt mach ";
                            }
                          },
                        },
                      })}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Password Requirements --> */}
              <div className="col-span-full">
                <div className="text-sm font-medium dark:text-white">
                  Password requirements:
                </div>
                <div className="mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Ensure that these requirements are met:
                </div>
                <ul className="space-y-1 pl-4 text-gray-500 dark:text-gray-400">
                  <li className="text-xs font-normal">
                    At least 10 characters (and up to 100 characters)
                  </li>
                  <li className="text-xs font-normal">
                    At least one lowercase character
                  </li>
                  <li className="text-xs font-normal">
                    Inclusion of at least one special character, e.g., ! @ # ?
                  </li>
                  <li className="text-xs font-normal">Some text here zoltan</li>
                </ul>
              </div>

              {/* <!-- Save Button --> */}
              <div className="col-span-6">
                <button
                  className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark: focus:ring-primary-800 focus:!ring-2 p-0 font-medium rounded-lg "
                  type="submit"
                >
                  <span className="flex items-center rounded-md text-sm px-3 py-2">
                    Save all
                  </span>
                </button>
              </div>
            </div>
          </form>
          <button onClick={() => console.log(Password)} className="primay-btn">
            test
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
