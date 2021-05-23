import React from "react";
import Particles from "react-particles-js";
import particalesConfig from "../config/particle-config";


export default function ParicaleBackground(){
   return(
       <Particles params={particalesConfig}></Particles>
   ); 
};