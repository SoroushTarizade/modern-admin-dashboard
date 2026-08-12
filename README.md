![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![Authentication](https://img.shields.io/badge/Auth-Session%20Based-success)
![Status](https://img.shields.io/badge/Status-Version%201.0%20Completed-success)
![License](https://img.shields.io/badge/License-MIT-green)

# Modern Admin Dashboard

A modern, responsive, and full-stack Admin Dashboard built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.

The project originally started as a dashboard UI and gradually evolved into a functional full-stack application with real authentication, session management, database integration, API routes, form validation, error handling, responsive layouts, and interactive dashboard features.

The main goal of this project was to build an application that is not only visually polished, but also demonstrates real-world frontend and full-stack development practices.

---

# 🌐 Live Demo

🔗 **Demo:**  
https://modern-admin-dashboard-g2yl.onrender.com/

💻 **Source Code:**  
https://github.com/SoroushTarizade/modern-admin-dashboard

---

# ✨ Overview

Modern Admin Dashboard is designed as a scalable dashboard application with a clean interface, reusable component architecture, and real application logic.

The application contains multiple administrative modules including:

- Dashboard
- Orders
- Contacts
- Team
- Inbox
- Calendar
- Invoice
- Product Stock
- Todo
- Favorites

The project also includes a real authentication system backed by MongoDB and server-side session management.

The application is structured to simulate the type of dashboard commonly used in real-world business and administrative systems.

---

# 🚀 Features

## 🔐 Authentication & Security

The project includes a complete authentication flow rather than a static frontend login system.

Implemented features include:

- User registration
- User login
- User logout
- Session-based authentication
- Protected routes
- Server-side session validation
- Password hashing with bcrypt
- HTTP-only session cookies
- Authentication API routes
- Duplicate email detection
- Duplicate username detection
- Invalid credential handling
- Authentication error handling
- Input validation
- Environment-based secrets

Passwords are never stored as plain text.

Before being stored in MongoDB, passwords are securely hashed using `bcrypt`.

### Authentication Flow

```text
Register
   ↓
Validate Input
   ↓
Check Existing User
   ↓
Hash Password
   ↓
Create User
   ↓
Create Session
   ↓
Set HTTP-only Cookie
   ↓
Protected Dashboard
