import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";

import {Posts} from "./pages/Posts";
import {Notfound} from "./pages/Notfound";
import {Login} from "./pages/Login";

import {Profile} from "./pages/Profile";
import {AUTH_LINK, POSTS_API, PROFILE_LINK} from "./constans/API.ts";
import {RequireAuth} from "./components/RequireAuth";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
          <Route index element={<Navigate to="posts" replace={true}/>} />
          <Route path={POSTS_API} element={<Posts />}/>
          <Route path={AUTH_LINK} element={<Login />} />
          <Route path={PROFILE_LINK} element={<Profile />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
