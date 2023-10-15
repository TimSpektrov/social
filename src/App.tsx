import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {Entry} from "./pages/Entry";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate()
    const isAuth = Boolean(localStorage.token)
    // useEffect(() => {
    //     if(!isAuth) navigate('/auth')
    // }, [isAuth])

  return (
    <>
      <BrowserRouter>
        <Header />
          <Layout >
            {/*<PostContainer />*/}
          </Layout>

          <Routes>
              {/*<Route path='/posts/:id' element={<Post />}/>*/}
              <Route path="/auth" element={<Entry />}/>
              <Route path='/' element={<Navigate replace to='/posts'/> } />
              {/*<Route path='*' element={<NotFound /> } />*/}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
