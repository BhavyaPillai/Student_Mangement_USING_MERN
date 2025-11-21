import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../Components/StudentForm";

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Loading student details
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Update student
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/${id}`, student)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-3">
      <h2>Edit Student</h2>

      <StudentForm
        student={student}
        setStudent={setStudent}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditStudent;
