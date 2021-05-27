// import { props } from 'bluebird';
import React, { Component } from 'react';
import { Redirect,Route } from 'react-router-dom';
import { getToken } from './common';



const PrivateRoute = ({component: Component, ...rest})=>{
return(
    <Route
     {...rest}
     render={props => {
       return  getToken() ? <Component {...props}/>
         : <Redirect to={{pathname:"/" , state: {from: props.location}}}/>

     }
    }
    />
 )
}

export default PrivateRoute; 