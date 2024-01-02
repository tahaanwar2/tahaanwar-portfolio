// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Headings from "./pages/Projheading";
import Heading from "./pages/Aboutheading";
import Certy from "./pages/Aboutcerty";
import Skill from "./pages/Skillheading";
import Login from "./pages/Login";
import Signup from "./pages/Sign";
import Logout from "./pages/Logout";
import UserAuthContext from "./pages/UserAuthContext";


const App = () => {
  return (
    <UserAuthContext>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route index element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projheading" element={<Headings />} />
          <Route path="/aboutheading" element={<Heading />} />
          <Route path="/aboutcerty" element={<Certy />} />
          <Route path="/skillheading" element={<Skill />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </UserAuthContext>
  );
};

export default App;
