import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./pages/Home";
import {Posts} from "./pages/Posts";
import {Notfound} from "./pages/Notfound";
import {Login} from "./pages/Login";
import {RequireAuth} from "./components/RequireAuth";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }>
          <Route index element={<Home />} />
          <Route path='auth' element={<Login />} />
          <Route path='posts' element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }/>
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
