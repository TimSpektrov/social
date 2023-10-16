import {Navigate, useLocation} from "react-router-dom";
import {ReactNode, useEffect, useState} from "react";

interface IRequireAuth {
  children: ReactNode;
}

export function RequireAuth({children}: IRequireAuth) {
  const location = useLocation();
  const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   if(!auth) {
  //     setAuth(!auth)
  //     return <Navigate to={'/auth'} state={{from: location}} />
  //   }
  // },[])

  return children
}
