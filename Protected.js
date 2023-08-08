import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Home from '../Pgaes/Home';

function Protected(props) {
  const login=props.login;
  console.log(login)
  if(login){
     return (
       <> 
       <Home/>
        <Outlet/>
       </>
     )
  }else{
    return  <Navigate to='/Login'></Navigate>
     
      
  }
    
}

export default Protected;