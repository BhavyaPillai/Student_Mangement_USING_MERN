🎓 Student Management System – MERN CRUD + Search (MVC)

A complete MERN stack project that manages student records with full Create, Read, Update, Delete (CRUD) operations and a Search feature.

Backend follows MVC Architecture and frontend uses React + Bootstrap.

📁 Project Structure
Student_Management_MERN/
│── Stud_backend/
│── Stud_frontend/

🛠 Technologies Used
Frontend

React

Axios

Bootstrap

React Router

Vite

Backend

Node.js

Express.js

MongoDB

Mongoose

MVC Architecture

CORS

🚀 Features

✔ Add Student
✔ View All Students
✔ Edit Student
✔ Delete Student
✔ Search Student (Exact Match / Regex)
✔ Reusable Form Component
✔ Clean UI with Bootstrap
✔ Fully structured MVC backend

📡 API Endpoints
Method	Endpoint	                     Description
POST	/api/students	                Add a student
GET	    /api/students	                Get all students
GET 	/api/students/:id	            Get a student
PUT	    /api/students/:id	            Update a student
DELETE	/api/students/:id	            Delete a student
GET	    /api/students/search?query=abc	Search students


⚙️ Setup Instructions
🔹 1. Backend Setup (Stud_backend)
cd Stud_backend
npm install

Run backend:

npm run dev

🔹 2. Frontend Setup (Stud_frontend)
cd ../Stud_frontend
npm install
npm run dev
