import {Navigate, useMatch} from "react-router-dom";
import {ReactNode} from "react";
import {useAppSelector} from "../../hooks/redux.ts";
import {AUTH_LINK, } from "../../constans/API.ts";

interface IRequireAuth {
  children: ReactNode;
}

export function RequireAuth({children}: IRequireAuth) {
  const {user} = useAppSelector(state => state.userReducer)
  const match = useMatch(AUTH_LINK)

  if(!user && !match){
    return <Navigate to={AUTH_LINK}/>
  }

  return children
}
