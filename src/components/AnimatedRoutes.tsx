import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Comparison from "../pages/Comparison";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home}></Route>
        <Route path="/comparison" Component={Comparison}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
