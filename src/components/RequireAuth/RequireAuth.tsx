import {Navigate, useLocation} from "react-router-dom";
import {ReactNode} from "react";

interface IRequireAuth {
  children: ReactNode;
}

export function RequireAuth({children}: IRequireAuth) {
  const location = useLocation();
  const auth = false;
  if(!auth) {
    return <Navigate to={'/auth'} state={{from: location}} />
  }
  return children
}
