import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!student) return
   <h2 className="text-center mt-4">Loading...</h2>;

  return (
    <div className="container mt-3">
      <h2>Student Details</h2>

      <ul className="list-group mt-3 shadow">
        <li className="list-group-item"><b>Name:</b> {student.name}</li>
        <li className="list-group-item"><b>Email:</b> {student.email}</li>
        <li className="list-group-item"><b>Phone:</b> {student.phone}</li>
        <li className="list-group-item"><b>Course:</b> {student.course}</li>
        <li className="list-group-item"><b>Created At:</b> {new Date(student.createdAt).toLocaleString()}</li>
      </ul>

      <Link className="btn btn-dark mt-3" to="/">Back</Link>
    </div>
  );
};

export default StudentDetails;
