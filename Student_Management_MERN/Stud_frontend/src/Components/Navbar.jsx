import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg px-4 shadow"
      style={{
        background: "linear-gradient(90deg, #0d043fff, #5564e5ff)",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          style={{ fontSize: "24px", letterSpacing: "1px" }}
        >
          🎓 Student Manager
        </Link>

        <div>
          <Link
            to="/add"
            className="btn text-white fw-semibold"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(3px)",
              borderRadius: "8px",
            }}
          >
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




