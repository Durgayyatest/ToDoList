📝 To-Do List Application
A full-stack To-Do List web application that allows users to:

✅ Add new tasks

🗑️ Delete tasks

🗃️ Store and retrieve tasks from a MySQL database

🔧 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript, Bootstrap
Backend	Node.js, Express
Database	MySQL

📁 Project Structure
bash
Copy
Edit
todo-app/
│
├── server.js         # Express backend
├── index.html        # Frontend (open in browser)
├── README.md         # Project documentation
🚀 Getting Started
1. 🛠 MySQL Setup
Open your MySQL client (e.g., MySQL Workbench, terminal, phpMyAdmin) and run:

sql
Copy
Edit
CREATE DATABASE todo1;

USE todo1;

CREATE TABLE todoItems (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  itemDescription VARCHAR(100),
  completed BOOLEAN DEFAULT FALSE
);

-- Optional sample data
INSERT INTO todoItems (itemDescription) VALUES ('Sample task from MySQL');
2. 📦 Install Backend Dependencies
Make sure you have Node.js installed.

Create a package.json (if needed):

bash
Copy
Edit
npm init -y
Then install required packages:

bash
Copy
Edit
npm install express mysql2 cors
3. ▶️ Run the Server
Start your backend server with:

bash
Copy
Edit
node server.js
By default, the server runs on http://localhost:3000.

4. 🌐 Open the App in Browser
Simply open index.html in your browser (e.g., Chrome).

You should be able to:

See all tasks from the MySQL database

Add new tasks

Delete tasks

🔄 API Endpoints
Method	Endpoint	Description
GET	/items	Fetch all todo items
POST	/add-item	Add a new todo item
DELETE	/item/:id	Delete a todo by ID

💡 Features You Can Add
✅ Mark tasks as complete (completed = true)

✏️ Edit task descriptions

📅 Add timestamps (created_at)

🧩 Authentication for multiple users

🙋‍♂️ Author
Created by vijay durgayya tanik — feel free to customize or extend this project.

