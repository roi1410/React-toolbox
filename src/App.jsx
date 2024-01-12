import { createContext, useState, useCallback } from "react";
import DropdownMenu from "./components/DropdownMenu";
import Hearo from "./components/hearo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Responsive_NavBar";
import TaillwindPracice from "./components/TailwindCompnents/TailwindPractice";
import UseCallback from "./practice/useCallback";
import Layout from "./Layout";
import AllForms from "./components/FormComponents/AllForms";
import Cloudinary_practice from "./practice/claodinary/Cloudinary";
import LocalStorege from "./practice/LocalStorege";
import Profile from "./components/Profile/Profile";
import ProfileSetting from "./components/Profile/ProfileSetting";
import APIAxius from "./practice/axios/APIAxius";
import AxiosGet from "./practice/axios/AxiosGet";
import AxiosPost from "./practice/axios/AxiosPost";
import DBmain from "./components/DB/DBmain";
import UploadWidget from "./practice/claodinary/UploadWidget";
import CloudinerySecWay from "./practice/claodinary/CloudinerySecWay";
import JsonServerMain from "./practice/jsonServerEx/jsonServerMain";

import UseReducer from "./practice/useReducer/UseReducer";
import Counter from "./practice/useReducer/Counter";
import UseRedocertodolist from "./practice/useReducer/UseRedocertodolist";
import Selenium from "./practice/selenium/Selenium";
import CodeShowCase from "./components/CodeShowCase";


export const testcontext = createContext("");
export const useCallback_Func = createContext("");

function App() {
  return (
    <>
      <testcontext.Provider value="Hero">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="DBmain" element={<DBmain />}></Route>
              <Route path="DropdownMenu" element={<DropdownMenu />} />
              <Route path="/" element={<Hearo />} />
              <Route path="profile" element={<Profile />}>
                <Route path="ProfileSetting" element={<ProfileSetting />} />
              </Route>
              <Route path="CodeShowCase" element={<CodeShowCase code={`here we can paste the code `}/>}></Route>

              <Route path="taillwind" element={<TaillwindPracice />}></Route>
              {/* practice */}
              <Route path ="jsonServerMain" element={<JsonServerMain/>}></Route>
              <Route path="UseReducer" element={<UseReducer/>}>
                <Route path="Counter" element= {<Counter/>}></Route>
                <Route path="UseRedocertodolist" element= {<UseRedocertodolist/>}></Route>
              </Route>

              <Route path="APIAxius" element={<APIAxius />}>
                <Route path="AxiousGet" element={<AxiosGet />}></Route>
                <Route path="AxiousPost" element={<AxiosPost />}></Route>
              </Route>
              <Route path="useCallback" element={<UseCallback />}></Route>
              <Route path="AllForms" element={<AllForms />}></Route>
              <Route path="Cloudinary" element={<Cloudinary_practice />}>
                <Route path="UploadWidget" element={<UploadWidget />}></Route>
                <Route
                  path="CloudinerySecWay"
                  element={<CloudinerySecWay />}
                ></Route>
              </Route>

              <Route path="LocalStorege" element={<LocalStorege />}></Route>
              {/* selnium pyhon tedting playgrownd */}
              <Route path="selnium" element={<Selenium/>} ></Route>


            </Route>
          </Routes>
        </BrowserRouter>
      </testcontext.Provider>
    </>
  );
}

export default App;
