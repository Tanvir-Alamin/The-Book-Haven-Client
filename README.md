# 📚 The Book Haven

🔗 **Live Site:** https://your-live-site-url  
💻 **Client Repository:** https://github.com/your-username/book-haven-client  
🖥️ **Server Repository:** https://github.com/your-username/book-haven-server

---

## 📝 Project Description

**The Book Haven** is a full-stack digital library web application where users can explore, add, update, and delete books.  
Authenticated users can manage their own book collection securely, while visitors can browse all available books.

This project integrates **React**, **Firebase Authentication**, **Node.js**, **Express.js**, and **MongoDB Atlas** into a modern, responsive single-page application.

---

## 🚀 Features

- 🔐 Email & Password Authentication
- 🔑 Google Login (Firebase)
- 🛡️ Private Routes with JWT Protection
- 📖 Add, Update & Delete Books (Owner Only)
- 📚 View All Books in Table Format
- 👤 My Books (User-Specific Data)
- 🌙 Dark / Light Theme Toggle
- ⭐ Sort Books by Rating
- 🔄 Persistent Login on Page Reload
- 🔔 SweetAlert & Toast Notifications
- ⏳ Loading Spinner & Custom 404 Page

---

## 🛠️ Technologies Used

### Frontend

- React
- React Router
- Firebase Authentication
- Tailwind CSS & DaisyUI
- Axios
- SweetAlert2
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Token (JWT)
- dotenv & CORS

---

## 🔐 Authentication & Security

- Firebase handles user authentication
- JWT secures private API routes
- Only logged-in users can:
  - Add new books
  - Update their own books
  - Delete their own books
- Logged-in users cannot access Login/Register pages

---

## 📂 Routes

### Public Routes

- `/` → Home
- `/all-books` → All Books
- `/login` → Login
- `/register` → Register

### Private Routes

- `/add-book`
- `/my-books`
- `/book-details/:id`
- `/update-book/:id`
- `/delete-book/:id`

---

## 📦 Book Data Structure

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fantasy / Mystery / Non-Fiction",
  "rating": "1–5",
  "summary": "Short description of the book",
  "coverImage": "Image URL",
  "userEmail": "User Email"
}
```

## 🌍 Deployment

- Client: Netlify / Firebase Hosting

- Server: Vercel

- Firebase authorized domains configured

- SPA routing works on page reload

---

## 👨‍💻 Author

- Tanvir Alamin
