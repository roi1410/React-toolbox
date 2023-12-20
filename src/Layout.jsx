import React from 'react'
import NavBar from './components/Responsive_NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
  <>
  <NavBar></NavBar>
  <Outlet/>
  
  
  
  
  </>
  )
}

export default Layout