import React from "react";
import { useForm } from "react-hook-form";


function GeneralInformation() {
  const {handleSubmit,register,formState:{errors}}=useForm()
 
  return (
    // need to add reactForms

    <>
      <div className="flex h-full flex-col justify-center gap-4 p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-bold dark:text-white">
          General information
        </h3>
        <form onSubmit={handleSubmit((data)=>console.log(data))}>
          <div className="grid grid-cols-6 gap-6">
            {/* <!-- First Name --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
               
              >
                First Name
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input

                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="firstName"
                    name="firstName"
                    placeholder="Bonnie"
                    required=""
                    {...register("firstName")}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Last Name --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                Last Name
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="lastName"
                    name="lastName"
                    placeholder="Green"
                    required=""
                    {...register("lastName")}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Country --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
               
              >
                Country
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="country"
                    name="country"
                    placeholder="United States"
                    {...register("country")}
                    required=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- City --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                City
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="city"
                    name="city"
                    placeholder="San Francisco"
                    required=""
                    {...register("city")}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Address --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                Address
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="address"
                    name="address"
                    placeholder="California"
                    {...register("address")}

                    required=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- Email --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                Email
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="email"
                    name="email"
                    placeholder="example@company.com"
                    required=""
                    {...register("email")}
                    type="email"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Phone Number --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
               
              >
                Phone Number
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="phone-number"
                    name="phone-number"
                    placeholder="e.g., +(12)3456 789"
                    required=""
                    type="tel"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Birthday --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
            
              >
                Birthday
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="birthday"
                    name="birthday"
                    placeholder="e.g., 15/08/1990"
                    required=""
                    type="date"
                    {...register("birthday")}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Organization --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                Organization
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="organization"
                    name="organization"
                    placeholder="Company name"
                    required=""
                    {...register("organization")}

                  />
                </div>
              </div>
            </div>

            {/* <!-- Role --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                Role
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="role"
                    name="role"
                    placeholder="React Developer"
                    required=""
                    {...register("role")}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Department --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                Department
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="department"
                    name="department"
                    placeholder="Development"
                    {...register("department")}

                    required=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- ZIP/Postal Code --> */}
            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                
              >
                ZIP/postal code
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="zip"
                    name="zip"
                    placeholder="12345"
                    required=""
                    {...register("zip")}

                  />
                </div>
              </div>
            </div>

            {/* <!-- Save Button --> */}
            <div className="col-span-6">
              <button
                className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:!ring-2 p-0 font-medium rounded-lg"
                type="submit"

              >
                <span className="flex items-center rounded-md text-sm px-3 py-2">
                  Save all
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default GeneralInformation;
