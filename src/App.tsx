import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";

import {Posts} from "./pages/Posts";
import {Notfound} from "./pages/Notfound";
import {Login} from "./pages/Login";
import {RequireAuth} from "./components/RequireAuth";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="posts" replace={true}/>} />
          <Route path='posts' element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }/>
          <Route path='auth' element={<Login />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
