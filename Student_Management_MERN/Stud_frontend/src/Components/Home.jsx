import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");

  const loadStudents = () => {
    axios.get("http://localhost:4000/api")
      .then((res) => setStudents(res.data))
      .catch(err => console.log(err));
  };

  const searchStudents = () => {
    axios
      .get(`http://localhost:4000/api/search?query=${query}`)
      .then((res) => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const deleteStudent = (id) => {
    if (window.confirm("Delete this student?")) {
      axios.delete(`http://localhost:4000/api/${id}`)
        .then(() => loadStudents())
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container mt-3">
      <h2>Student List</h2>

      <div className="d-flex gap-2 mt-3">
        <input
          className="form-control"
          placeholder="Search name / email / course..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="btn btn-info" onClick={searchStudents}>Search</button>
        <button className="btn btn-secondary" onClick={loadStudents}>Reset</button>
      </div>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Course</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 && (
            <tr><td colSpan="5" className="text-center">No Data</td></tr>
          )}

          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.phone}</td>
              <td>{s.course}</td>
              <td>
                <Link to={`/details/${s._id}`} className="btn btn-sm btn-info me-1">View</Link>
                <Link to={`/edit/${s._id}`} className="btn btn-sm btn-warning me-1">Edit</Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteStudent(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
