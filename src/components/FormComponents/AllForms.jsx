import React from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";
import Register from "./Register";
import ShopingAdressForm from "./ShopingAdressForm";

function AllForms() {
  // All this forms using react hook forms
  
  return (
    <>
    <Login/>
    <Register/>
    <ShopingAdressForm/>
    
    
    </>
    
  );
}

export default AllForms;
