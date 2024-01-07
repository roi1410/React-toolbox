import { useReducer, useRef } from "react";



import React from 'react'
import Mininavbar from "../../MiniNavbar";
import { Outlet } from "react-router-dom";

function UseReducer() {
  return (
   <>
   <Mininavbar paths={["Counter","UseRedocertodolist"]}/>
   <Outlet/>
   
   </>
  )
}

export default UseReducer
