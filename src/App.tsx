import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {useEffect} from "react";
import {fetchUser} from "./store/reducers/ActionCreators.ts";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Layout >
            {/*<PostContainer />*/}
          </Layout>

          {/*<Routes>*/}
          {/*    <Route path="/" element={<> </>}/>*/}
          {/*</Routes>*/}
      </BrowserRouter>
    </>
  )
}

export default App
