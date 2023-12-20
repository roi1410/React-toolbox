import { createContext, useState, useCallback } from "react";
import DropdownMenu from "./components/DropdownMenu";
import Hearo from "./components/hearo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Responsive_NavBar";
import TaillwindPracice from "./components/TailwindPractice";
import UseCallback from "./practice/useCallback";
import Layout from "./Layout";
import AllForms from "./components/FormComponents/AllForms";
import Cloudinary_practice from "./practice/Cloudinary";
import LocalStorege from "./practice/LocalStorege";
import Profile from "./components/Profile/Profile";
import ProfileSetting from "./components/Profile/ProfileSetting";
import APIAxius from "./practice/axios/APIAxius";
import AxiosGet from "./practice/axios/AxiosGet";
import AxiosPost from "./practice/axios/AxiosPost";

export const testcontext = createContext("");
export const useCallback_Func = createContext("");

function App() {
  return (
    <>
      <testcontext.Provider value="Hero">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="DropdownMenu" element={<DropdownMenu />} />
              <Route path="/" element={<Hearo />} />
              <Route path="profile" element={<Profile />}>
                <Route path="ProfileSetting" element={<ProfileSetting />} />
              </Route>

              <Route path="taillwind" element={<TaillwindPracice />}></Route>
              {/* practice */}
              <Route path="APIAxius" element={<APIAxius/>}>
                <Route path="AxiousGet" element={<AxiosGet/>}></Route>
                <Route path="AxiousPost" element={<AxiosPost/>}></Route>
              </Route>
              <Route path="useCallback" element={<UseCallback />}></Route>
              <Route path="AllForms" element={<AllForms />}></Route>
              <Route
                path="Cloudinary"
                element={<Cloudinary_practice />}
              ></Route>

              <Route path="LocalStorege" element={<LocalStorege />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </testcontext.Provider>
    </>
  );
}

export default App;
