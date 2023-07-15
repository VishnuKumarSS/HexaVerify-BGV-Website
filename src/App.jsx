// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// export default function App() {
//   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// }

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

{
  /* <div className="page-document">
          <div className="content-wrapper">
            <div className="content">
              <div className="nav-bar">
                <div className="nav-contents">
                  <div className="frame">
                    <div className="group">
                      <div className="text-wrapper">Logo</div>
                      <div className="ellipse" />
                      <div className="div" />
                      <div className="rectangle" />
                    </div>
                    <h1 className="h-1">HexaVerify</h1>
                  </div>
                  <div className="sections ">
                    <Link className="frame-2" to="/">
                      <div className="text-wrapper-3">Home</div>
                    </Link>
                    <Link className="frame-2" to="/employee">
                      <div className="text-wrapper-3">Employee</div>
                    </Link>
                    <Link className="frame-2" to="/hr">
                      <div className="text-wrapper-3">HR</div>
                    </Link>
                    <Link className="frame-2" to="/hr">
                      <div className="text-wrapper-3">Vendor</div>
                    </Link>
                    <Link className="frame-2" to="/hr">
                      <div className="text-wrapper-3">Manager</div>
                    </Link>
                  </div>
                  <div className="sections-mode-and">
                    <div className="mode-and-contact">
                      <div className="frame-3">
                        <img className="img" alt="Group" src="group-4.png" />
                        <div className="text-wrapper-4">Logout</div>
                      </div>
                      <img className="frame-4" alt="Frame" src="frame-11.svg" />
                      <div className="frame-5">
                        <img
                          className="profile-picture-of"
                          alt="Profile picture of"
                          src="profile-picture-of-woman-in-black-hat-and-pink-shirt.png"
                        />
                        <div className="text-wrapper-5">User 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
