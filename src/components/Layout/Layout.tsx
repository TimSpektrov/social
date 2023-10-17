import {Header} from "../Header";
import {Outlet} from "react-router-dom";
import "./layout.scss";

export function Layout() {



  return (
    <>
      <Header />
      <main className="main container">
        <Outlet />
      </main>
      <footer className="footer container">Footer</footer>
    </>
  );
}
