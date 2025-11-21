const Student = require("../models/Student");

// CREATE STUDENT
const createStudent = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;
    const student = await Student.create({ name, email, phone, course });
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding student" });
  }
};

// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching students" });
  }
};

// GET ONE STUDENT
const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving student" });
  }
};

// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, course },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating student" });
  }
};

// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting student" });
  }
};

// SEARCH STUDENTS (Exact Match Only)
const searchStudents = async (req, res) => {
  try {
    const { query } = req.query;  // Example: /search?query=Bhavya
    console.log("Query: " + query);

    const data = await Student.find({
      name: query   // Exact match
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error searching students" });
  }
};
module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
};


