# Love-Auth 🛡️ - Authentication & User Management Package

Love-Auth is a ready-to-use authentication and user management system built with **Node.js, Express, and Mongoose**. It comes with essential authentication features, structured routes, and utility functions to speed up your backend development. 🚀

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

## 📦 Installation

To install Love-Auth in your project, run:

```sh
npm install "<path-to-your-love-auth-package>"
```

or, if you're using a local package:

```sh
npm install "C:/Users/YourUser/Documents/love-auth"
```

Once installed, you can import it into your project:

```js
import loveAuth from "love-auth";
console.log(loveAuth);
```

---

## 📂 Folder Structure

```
project-root/
│── config/
│   ├── constants.js
│   ├── dbConnection.js
│
│── controllers/
│   ├── userAuth.controller.js
│
│── middleware/
│   ├── auth.middleware.js
│
│── models/
│   ├── userSchema.model.js
│
│── routes/
│   ├── user.routes.js
│
│── utils/
│   ├── apiError.js
│   ├── apiResponse.js
│   ├── asyncHandler.js
│
│── index.js
│── app.js
│── .env
```

---

## 🛠️ Prerequisites

Before using Love-Auth, make sure you have the following dependencies installed:

```json
"dependencies": {
  "bcrypt": "latest",
  "cookie-parser": "latest",
  "cors": "latest",
  "dotenv": "latest",
  "express": "latest",
  "jsonwebtoken": "latest",
  "mongoose": "latest",
  "nodemon": "latest"
}
```

Install them using:

```sh
npm install bcrypt cookie-parser cors dotenv express jsonwebtoken mongoose nodemon
```

---

## ⚡ Usage

### 1️⃣ Start the Application

```sh
npm start
```

or if using **nodemon**:

```sh
npm run dev
```

### 2️⃣ Set Up Environment Variables

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

## 📜 License

This project is licensed under the MIT License - feel free to use and modify! 📝

---

## 🚀 Contributing

Have suggestions or improvements? Feel free to fork and contribute!

---

Made with ❤️ by Lovekesh Anand

