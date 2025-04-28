---

# LoveAuthentication 🛡️ - Authentication & User Management Package

LoveAuthentication is a ready-to-use authentication and user management system built with **Node.js, Express, and Mongoose**. It comes with essential authentication features, structured routes, and utility functions to speed up your backend development. 🚀

---

## ✨ Features

✅ **User Authentication** (JWT-based Login & Registration)  
✅ **Pre-defined User Model** (Using Mongoose)  
✅ **Middleware for Authentication & Authorization**  
✅ **Utility Functions** (API Errors, API Responses, AsyncHandler)  
✅ **Database Connection Setup** (MongoDB using Mongoose)  
✅ **Environment Variables Support** (via `dotenv`)  
✅ **Modular Codebase** (Easily extendable and customizable)  

---

## 🛋️ Installation

To install LoveAuthentication in your project, run:

```sh
npm install love-authentication
```

or using yarn:

```sh
yarn add love-authentication
```

---

## 💂 Folder Structure

```
project-root/
│── config/
│   ├── constants.js
│   └── dbConnection.js
│
│── controllers/
│   └── userAuth.controller.js
│
│── middleware/
│   └── auth.middleware.js
│
│── models/
│   └── userSchema.model.js
│
│── routes/
│   └── user.routes.js
│
│── utils/
│   ├── apiError.js
│   ├── apiResponse.js
│   └── asyncHandler.js
│
│── index.js
│── app.js
│── .env
```

---

## 🛠️ Prerequisites

Before using LoveAuthentication, make sure you have the following dependencies installed:

```json
"dependencies": {
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "fs-extra": "^11.3.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.10.1"
}
```

Install them using:

```sh
npm install bcrypt cookie-parser cors dotenv express jsonwebtoken mongoose multer nodemon
```

---

## ⚡ Usage

### 1 Start the Application

```sh
npm start
```

or if using **nodemon**:

```sh
npm run dev
```

### 2 Set Up Environment Variables

Create a `.env` file in your project root and configure your settings:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📌 Important Notes

- **ES Modules Support**: This package uses **`type: module`** in `package.json`. Use `import` instead of `require`.
- **Utilities Included**:
  - `apiError.js` → Custom error handling class.
  - `apiResponse.js` → Standardized API response helper.
  - `asyncHandler.js` → Async wrapper to handle errors properly.

---

## 📝 License

This project is licensed under the MIT License - feel free to use and modify! 📝

---

## 🚀 Contributing

Have suggestions or improvements? Feel free to fork and contribute!

---

Made with ❤️ by Lovekesh Anand

---
