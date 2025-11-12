# 🚀 Quickstart Forum  
### Full-Stack Authentication App — *Vite + Express + MongoDB + JWT*

![Project Badge](https://img.shields.io/badge/Full--Stack-React%20%7C%20Express%20%7C%20MongoDB-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🧠 Overview
**Quickstart Forum** is a lightweight full-stack web application demonstrating a complete **authentication workflow** — from user registration to login and protected routes.  
Built with a modern **MERN-stack architecture**, featuring **React (Vite)** on the client and **Express + MongoDB** on the server.

Users can:
- ✨ Register a new account  
- 🔐 Login with credentials  
- 🧩 Access a protected dashboard  
- 🚪 Logout securely using JWT  

---

## 🧱 Tech Stack

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | Vite + React Router | Fast, modular UI with routing |
| **Backend** | Express + MongoDB (Mongoose) | REST API with authentication |
| **Auth** | bcrypt + jsonwebtoken | Secure password hashing and JWTs |
| **Other Tools** | nodemon, cors, dotenv | Development & environment setup |

---

## ⚙️ Environment Variables

Create a `.env` file inside your `/server` folder with:

```bash
PORT=4001
MONGO_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=changeme
