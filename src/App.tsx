import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Posts} from "./pages/Posts";
import {Notfound} from "./pages/Notfound";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";
import {AUTH_LINK, POSTS_API, PROFILE_LINK} from "./constans/API.ts";
import {Post} from "./pages/Post";
import {RequireAuth} from "./components/RequireAuth";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
          <Route index element={<Navigate to={POSTS_API}/>} />
          <Route path={POSTS_API} element={<Posts />}/>
          <Route path={`${POSTS_API}/:id`} element={ <Post />}/>
          <Route path={AUTH_LINK} element={<Login />} />
          <Route path={PROFILE_LINK} element={<Profile />} />
        </Route>
        <Route path='*' element={<Notfound />} />
        <Route path='/social' element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
