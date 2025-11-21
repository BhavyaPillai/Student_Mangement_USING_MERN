import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/api", student)  // ✅ Correct API
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div 
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #91eefaff, #076e82ff)"
      }}
    >
      <div className="row justify-content-center">

        {/* LEFT CARD */}
        <div className="col-md-4">
          <div className="card text-white shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ff9966, #ff5e62)",
              borderRadius: "15px"
            }}>
            <div className="card-body">
              <h3 className="fw-bold">Add New Student</h3>
              <p className="mt-2">
                Enter student details on the right and click Save.
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
            <h3 className="text-center mb-3">Student Information</h3>

            <form onSubmit={handleSubmit}>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={student.name}
                  onChange={(e) => setStudent({ ...student, name: e.target.value })}
                  required
                />
                <label>Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={student.email}
                  onChange={(e) => setStudent({ ...student, email: e.target.value })}
                  required
                />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={student.phone}
                  onChange={(e) => setStudent({ ...student, phone: e.target.value })}
                  required
                />
                <label>Phone</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course"
                  value={student.course}
                  onChange={(e) => setStudent({ ...student, course: e.target.value })}
                  required
                />
                <label>Course</label>
              </div>

              <button className="btn btn-primary w-100 py-2">
                Save Student
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddStudent;





