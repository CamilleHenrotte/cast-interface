import { Routes, Route } from "react-router-dom";
import Invest from "./pages/Invest";
import Connect from "./pages/Connect";
import View from "./pages/View";
import Home from "./pages/Home";
import BackOffice from "./pages/BackOffice";
const Main = () => {
  return (
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" element={<Home />}></Route>

      <Route exact path="/invest" element={<Invest />}></Route>
      <Route exact path="/view" element={<View />}></Route>
      <Route exact path="/connect" element={<Connect />}></Route>
      <Route exact path="/back" element={<BackOffice />}></Route>
    </Routes>
  );
};

export default Main;
