import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/base/Footer";
import Header from "./layouts/base/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
