import React from "react";

const StudentForm = ({ student, setStudent, handleSubmit }) => {
  return (
    <form className="card p-4 shadow mt-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        required
      />

      <input
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={student.email}
        onChange={(e) => setStudent({ ...student, email: e.target.value })}
        required
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Phone"
        value={student.phone}
        onChange={(e) => setStudent({ ...student, phone: e.target.value })}
        required
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Course"
        value={student.course}
        onChange={(e) => setStudent({ ...student, course: e.target.value })}
        required
      />

      <button className="btn btn-primary w-100">Save</button>
    </form>
  );
};

export default StudentForm;
