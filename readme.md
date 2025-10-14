# 📝 ToDo List Full-Stack Application  

A full-stack ToDo application that allows users to register, log in, and manage their tasks securely. The app is built with **React.js** for the frontend, **Express.js** for the backend, **MongoDB** for the database, and uses **JWT** authentication. Input validation is handled with **Zod** to ensure data integrity.  

---

## 🚀 Features  

### 🔐 Authentication  
- User **Sign Up** with validation (using Zod).  
- User **Login** with secure password hashing.  
- **JWT-based authentication** for protected routes.  

### 🗂️ ToDo Management  
- Create a **ToDo** with:  
  - **Title**  
  - **Description**  
  - **Completed (true/false)**  
- Update existing ToDos.  
- Mark tasks as complete/incomplete.  
- Delete ToDos.  
- View all ToDos belonging to the logged-in user.  

### 🛡️ Security  
- Passwords are hashed before storing in the database.  
- JWT tokens used for route protection.  

---

## 🛠️ Tech Stack  

### Frontend  
- **React.js** – Component-based UI.  
- **Axios** – For making API requests.  

### Backend  
- **Node.js** & **Express.js** – REST API server.  
- **JWT** – Authentication and authorization.  
- **Zod** – Input validation for request bodies.  

### Database  
- **MongoDB** – Stores users and todos.  
- **Mongoose** – ODM for MongoDB.  

---

## 📂 Project Structure 
todolist-app/
│
├── backend/ # Express server
│ ├── src/
│ │ ├── config/ # DB connection & JWT config
│ │ ├── controllers/ # Business logic for todos & users
│ │ ├── middlewares/ # Auth middleware, validation
│ │ ├── models/ # Mongoose schemas (User, Todo)
│ │ ├── routes/ # API endpoints
│ │ └── index.js # Entry point of server
│ └── package.json
│
├── frontend/ # React app
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Pages (Login, Signup, Todos)
│ │ ├── services/ # Axios API calls
│ │ ├── context/ # Auth context
│ │ └── App.js
│ └── package.json
│
└── README.md
