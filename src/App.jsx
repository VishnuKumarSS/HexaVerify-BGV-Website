import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HRPage from "./pages/HRPage";
import EmployeePage from "./pages/EmployeePage";
import VendorPage from "./pages/VendorPage";
import ManagerPage from "./pages/ManagerPage";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/hr" element={<HRPage />}></Route>
          <Route path="/employee" element={<EmployeePage />}></Route>
          <Route path="/vendor" element={<VendorPage />}></Route>
          <Route path="/manager" element={<ManagerPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
