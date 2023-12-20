
import { NavLink } from 'react-router-dom'


function AxiosNavbar() {
 
    
  return (
    <>
     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to={"AxiousGet"} >get</NavLink>
            <NavLink to={"AxiousPost"} >Post</NavLink>

        
            
           
          </div>
        </div>
      </nav>
    
  


    </>
  )
}

export default AxiosNavbar