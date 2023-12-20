import React from "react";
import UpperProfile from "./UpperProfile";
import ProfileNavbar from "./ProfileNavbar";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
    <ProfileNavbar/>
    <UpperProfile/>
    <Outlet/>
  
    </>
  );
}

export default Profile;
