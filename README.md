![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![Authentication](https://img.shields.io/badge/Auth-Session%20Based-success)
![Deployment](https://img.shields.io/badge/Deployment-Render-46E3B7)
![Status](https://img.shields.io/badge/Status-Version%201.0%20Completed-success)
![License](https://img.shields.io/badge/License-MIT-green)

# Modern Admin Dashboard

A modern, responsive, and full-stack Admin Dashboard built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **MongoDB Atlas**.

This project started as a dashboard UI implementation and gradually evolved into a functional full-stack application with real authentication, session management, database integration, API routes, form validation, error handling, interactive dashboard modules, responsive layouts, and reusable component architecture.

The goal of this project was not simply to create a visually attractive dashboard, but to demonstrate how a modern dashboard application can be structured, developed, secured, tested, and deployed using real-world development practices.

---

# 🌐 Live Demo

### Production

https://modern-admin-dashboard-g2yl.onrender.com/

### Source Code

https://github.com/SoroushTarizade/modern-admin-dashboard

---

# 📌 Project Overview

Modern Admin Dashboard is a business-oriented administrative interface designed to simulate a real-world management system.

The application contains multiple dashboard modules including:

- Dashboard analytics
- Orders management
- Contacts management
- Team management
- Inbox
- Calendar
- Invoice
- Product Stock
- Todo
- Favorites
- Authentication

Unlike a static dashboard template, the project contains actual application logic behind many of its interfaces.

The authentication system is connected to MongoDB Atlas and uses server-side session management.

The project also includes reusable components, custom hooks, TypeScript interfaces, API routes, validation, error handling, responsive layouts, and production deployment.

---

# 🎯 Project Goals

The main goals of the project were:

- Build a modern dashboard UI
- Practice real-world React and Next.js architecture
- Build reusable components
- Separate UI from application logic
- Implement responsive layouts
- Implement authentication from scratch
- Connect the application to MongoDB
- Build API routes using Next.js
- Implement session-based authentication
- Secure user passwords using hashing
- Implement form validation
- Handle API errors properly
- Implement interactive dashboard modules
- Improve code organization and maintainability
- Deploy the application to production

---

# ✨ Core Capabilities

The current version includes:

- Modern dashboard interface
- Responsive layout
- Light and dark mode
- Theme persistence
- Authentication
- Registration
- Login
- Logout
- Session management
- Protected routes
- MongoDB integration
- Mongoose models
- Password hashing
- API routes
- Form validation
- API error handling
- Loading states
- Disabled form states
- Search
- Filtering
- Pagination
- Contact management
- Team management
- Orders management
- Calendar
- Inbox
- Invoice
- Product Stock
- Todo
- Favorites
- Reusable components
- Custom hooks
- TypeScript architecture
- Production deployment

---

# 🖥️ Dashboard Modules

## 📊 Dashboard

The main dashboard provides an overview of the application's data and activity.

It includes:

- Analytics cards
- Statistics
- Charts
- Data visualization
- Recent activity
- Responsive dashboard layout

The dashboard is designed to provide users with a quick overview of the most important information.

---

# 📦 Orders

The Orders section provides an administrative order management interface.

Features include:

- Order listing
- Status filtering
- Type filtering
- Date filtering
- Pagination
- Reset filters
- Empty result states
- Responsive table layout

The filtering and pagination logic is handled on the client side and is separated from the visual presentation.

---

# 👤 Contacts

The Contacts module contains interactive contact management functionality.

Features include:

- View contacts
- Search contacts
- Add contacts
- Edit contacts
- Delete contacts
- Favorite / unfavorite contacts
- Contact profile images
- Image preview
- Form validation
- Empty states
- Responsive contact cards
- Dynamic filtering

The Contacts module demonstrates client-side CRUD-style application logic.

### Contact operations

```text
Create  → Add Contact
Read    → Display Contacts
Update  → Edit Contact
Delete  → Delete Contact
