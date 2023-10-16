import {Navigate} from "react-router-dom";
import {ReactNode} from "react";

interface IRequireAuth {
  children: ReactNode;
}

export function RequireAuth({children}: IRequireAuth) {

  console.log('RequireAuth')
  if(!localStorage.getItem('token')) {
    return <Navigate to={'/auth'}/>
  }


  return children
}
