![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![Authentication](https://img.shields.io/badge/Auth-Session%20Based-success)
![Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-MIT-green)

# Modern Admin Dashboard

A modern, responsive, and full-stack Admin Dashboard built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.

The project started as a dashboard UI and has evolved into a functional full-stack application with real authentication, session management, database integration, API routes, CRUD functionality, form validation, error handling, and responsive layouts.

The main goal of this project was to build a dashboard that is not only visually polished, but also demonstrates real-world frontend and full-stack development practices.

---

# 🌐 Live Demo

🔗 **Demo:** https://modern-admin-dashboard-g2yl.onrender.com/

💻 **Source Code:** https://github.com/SoroushTarizade/modern-admin-dashboard

---

# ✨ Overview

Modern Admin Dashboard is designed as a scalable dashboard application with a clean UI, reusable component architecture, and real application logic.

The project includes:

- Secure authentication
- Session-based authorization
- MongoDB database integration
- Password hashing
- API routes
- CRUD operations
- Form validation
- Error handling
- Search and filtering
- Pagination
- Light and dark themes
- Responsive layouts
- Reusable components
- TypeScript-based architecture

The project is structured to simulate the kind of dashboard application commonly used in real-world business and administrative systems.

---

# Preview

## Dashboard — Light Mode

![Dashboard Light](./assets/screenshots/HomePage-light.png)

---

## Dashboard — Dark Mode

![Dashboard Dark](./assets/screenshots/HomePage-dark.png)

---

## Inbox — Light Mode

![Inbox Light](./assets/screenshots/InboxPage-light.png)

---

## Inbox — Dark Mode

![Inbox Dark](./assets/screenshots/InboxPage-dark.png)

---

## Register

![Register](./assets/screenshots/RegisterPage.png)

---

## Sign In

![Sign In](./assets/screenshots/signInPage.png)

---

## 404 Page

![404](./assets/screenshots/Eror404.png)

---

# 🚀 Features

## 🔐 Authentication & Security

The project includes a complete authentication flow rather than a UI-only login system.

- User registration
- User login
- User logout
- Session-based authentication
- Protected routes
- Password hashing with bcrypt
- Secure HTTP-only session cookies
- Authentication API routes
- Duplicate email detection
- Duplicate username detection
- Invalid credential handling
- Authentication error handling

Passwords are never stored as plain text. Passwords are securely hashed before being stored in MongoDB.

---

## 👤 Contacts Management

The Contacts section includes real client-side CRUD-style functionality.

- View contacts
- Search contacts
- Add new contacts
- Edit contacts
- Delete contacts
- Favorite / unfavorite contacts
- Contact profile images
- Empty states
- Form validation
- Responsive contact cards
- Dynamic filtering

New contacts can be added through a functional modal form and immediately appear in the dashboard.

---

## 👥 Team Management

The Team section includes functional team member management.

- View team members
- Add new team members
- Profile image upload and preview
- Form validation
- Disabled save state for invalid forms
- Responsive team grid
- Reusable team components

---

## 📦 Orders Management

The Orders section provides a structured order management interface.

- Order listing
- Status filtering
- Type filtering
- Date filtering
- Pagination
- Reset filters
- Empty results handling
- Responsive table layout

---

## 📊 Dashboard Analytics

The main dashboard includes:

- Analytics cards
- Data visualization
- Charts
- Statistics
- Recent activity
- Responsive dashboard layout

---

## 📅 Calendar

The project includes an interactive calendar interface using FullCalendar.

---

## 📥 Inbox

The Inbox section provides a dashboard-style messaging interface with:

- Message listing
- Message states
- Responsive layout
- Empty states

---

## 📄 Invoice

The project includes an invoice management interface designed for administrative workflows.

---

## 📦 Product Stock

A dedicated Product Stock page is included for displaying and managing product inventory information.

---

## ⭐ Favorites

Favorite functionality is implemented across relevant dashboard sections.

---

## 📝 Todo

A Todo section is included as part of the dashboard application.

---

# 🎨 UI & UX

The dashboard focuses heavily on usability and responsive design.

### Theme Support

- Light mode
- Dark mode
- Theme persistence
- Consistent design tokens

### Responsive Design

The interface has been tested across:

- Desktop
- Tablet
- Mobile

Layouts adapt using responsive Tailwind CSS breakpoints.

---

# 🧩 Component Architecture

The project follows a reusable component-based architecture.

Instead of placing all UI logic inside page components, functionality is separated into reusable components such as:

```text
components/
├── auth/
├── contact/
├── team/
├── order/
├── header/
├── sidebar/
└── ...
