import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
import StudentDetails from "./Components/StudentDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/details/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
