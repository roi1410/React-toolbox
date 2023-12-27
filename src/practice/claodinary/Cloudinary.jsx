import React from 'react'
import UploadWidget from './UploadWidget'
import CloudinerySecWay from './CloudinerySecWay'
import Mininavbar from '../../MiniNavbar'
import { Outlet } from 'react-router-dom'


function Cloudinary_practice() {

  return (
    <div>
      <Mininavbar paths={["CloudinerySecWay","UploadWidget"]}/>
      <Outlet/>
       
      

    </div>
  )
};
export default Cloudinary_practice
