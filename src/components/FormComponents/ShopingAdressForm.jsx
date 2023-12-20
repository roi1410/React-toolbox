import React from "react";
import { useForm } from "react-hook-form";
function ShopingAdressForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      Username: "",
      state: "",
      Country: "",
      zip: "",
    },
  });
  function isZipCode(str) {
    return /^\d(-\d)?$/.test(str);
  }
  return (
    <>
      <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
        <h2 className="text-black font-bold text-lg">
          Shipping Label Address Form
        </h2>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mt-4">
            <label className="text-black">Name</label>
            <input
              placeholder="Username"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
              {...register("Username", {
                required: "Username is required",
                validate: {},
              })}
            />
          </div>

          <div className="mt-4">
            <label className="text-black">Address</label>
            <textarea
              placeholder="Your address"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="address"
              {...register("address")}
            ></textarea>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black">City</label>
              <input
                placeholder="Your city"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="city"
                type="text"
                {...register("city")}
              />
            </div>

            <div className="flex-1">
              <label className="text-black">State</label>
              <input
                placeholder="Your state"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="state"
                type="text"
                {...register("state")}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black">ZIP</label>
              <input
                placeholder="Your ZIP code"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                type="text"
                {...register("zip", { required: "zip code is required" })}
              />
            </div>

            <div className="flex-1">
              <label className="text-black">Country</label>
              <select
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                {...register("Country")}
              >
                <option value="">Select a country</option>
                <optgroup label="Africa">
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Angola">Angola</option>
                  ...
                  <option value="ZW">Zimbabwe</option>
                </optgroup>
                <optgroup label="Asia">
                  <option value="AM">Armenia</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BH">Bahrain</option>
                  ...
                  <option value="YE">Yemen</option>
                </optgroup>
                <optgroup label="South America">
                  <option value="AR">Argentina</option>
                  <option value="BO">Bolivia</option>
                  <option value="BR">Brazil</option>
                  ...
                  <option value="VE">Venezuela</option>
                </optgroup>
                ...
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ShopingAdressForm;
