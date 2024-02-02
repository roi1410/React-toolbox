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
