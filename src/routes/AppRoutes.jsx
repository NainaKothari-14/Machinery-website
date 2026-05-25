import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Machines from "../pages/Machines";
import MachineDetails from "../pages/MachineDetails";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/machines"
        element={<Machines />}
      />

      <Route
        path="/machines/:id"
        element={<MachineDetails />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;