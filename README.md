# ✅ ToDo App – Task Management Made Simple

A full-stack ToDo application that helps users organize their tasks efficiently with secure authentication and a clean user interface.

🔗 **Live Demo**: https://task-manager-lab.netlify.app/

> ⚠️ **Note:** The backend is hosted on [Render](https://render.com), which may take **40–50 seconds** to start up when idle. Please wait a few moments after your first action (e.g., signup or login).

---

## 🚀 Tech Stack

### 🔹 Frontend – React.js
- **Axios** for fetching data from APIs
- Pages:
  - 🏠 **Home**
  - 🔐 **Signup**
  - 🔑 **Signin**
- Dynamic rendering of todos (Add, Update, Delete)

### 🔹 Backend – Node.js & Express.js
- **MongoDB** with **Mongoose** for database management
- **JWT Authentication** for secure login/signup
- RESTful API design

---


## 📂 Project Structure

```
Todo-App/
├── backend/
│   ├── routes
│   │   └── router.js
│   ├── .gitignore
│   ├── db.js
│   ├── index.js
│   ├── middelware.js
│   ├── package-lock.json
│   └── package.json
├── frontend
│   ├── public
│   │   └── _redirects
│   ├── src
│   │   ├── components
|   |   |      ├── AddTodos.jsx
|   |   |      └── RenderTodos.jsx
│   │   ├── pages
|   |   |      ├── Button.jsx
|   |   |      ├── Home.jsx
|   |   |      ├── Signin.jsx
|   |   |      └── Signup.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslist.config.js
│   ├── favicon.ico
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
|   └── vite.config.js
├── .gitignore
└── README.md



