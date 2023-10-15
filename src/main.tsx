import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.scss'
import './main.global.scss'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
