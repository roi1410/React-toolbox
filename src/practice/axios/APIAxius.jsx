import React from 'react'
import AxiosNavbar from './AxiosNavbar'
import { Outlet } from 'react-router-dom'

function APIAxius() {
  return (
    <>
    <AxiosNavbar/>
    <Outlet/>
    </>
  )
}

export default APIAxius