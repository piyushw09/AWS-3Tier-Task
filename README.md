# 🚀 AWS 3-Tier Web Application

A production-ready 3-Tier Web Application deployed on AWS using modern cloud-native practices, secure JWT authentication, and CI/CD automation.

---

## 📌 Project Overview

This project demonstrates the deployment of a scalable and secure 3-Tier architecture on AWS.

The application consists of:

* **Frontend Tier:** React.js application hosted on Amazon S3.
* **Application Tier:** Node.js and Express.js backend hosted on AWS Elastic Beanstalk.
* **Database Tier:** MongoDB Atlas database.

The project also includes:

* JWT Authentication & Authorization
* Protected APIs
* Automated Frontend Deployment using GitHub Actions
* Responsive UI using React Bootstrap

---

# 🏗️ Architecture

```text
┌──────────────────────┐
│      End User        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Amazon S3 (Frontend) │
│ React + Vite         │
└──────────┬───────────┘
           │ REST API
           ▼
┌──────────────────────────────┐
│ AWS Elastic Beanstalk        │
│ Node.js + Express Backend    │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────┐
│   MongoDB Atlas      │
│      Database        │
└──────────────────────┘
```

---

# ✨ Features

## User Features

* User Registration
* User Login
* JWT-based Authentication
* Secure Logout
* Protected Dashboard
* View Registered Users

---

## Security Features

* JWT Token Generation
* Protected Backend APIs
* Protected Frontend Routes
* Automatic Logout on Invalid/Expired Tokens
* Axios Request & Response Interceptors

---

## Cloud Features

* Static Frontend Hosting using Amazon S3
* Backend Deployment using Elastic Beanstalk
* MongoDB Atlas Integration
* Health Check Endpoint
* Environment Variable Management

---

## DevOps Features

* Source Code Management using Git & GitHub
* Automated Frontend Deployment using GitHub Actions
* CI/CD Pipeline for Continuous Deployment

---

# 🛠️ Tech Stack

| Category         | Technologies                    |
| ---------------- | ------------------------------- |
| Frontend         | React.js, Vite, React Bootstrap |
| Backend          | Node.js, Express.js             |
| Database         | MongoDB Atlas                   |
| Authentication   | JSON Web Token (JWT)            |
| Cloud Platform   | AWS                             |
| Frontend Hosting | Amazon S3                       |
| Backend Hosting  | Elastic Beanstalk               |
| CI/CD            | GitHub Actions                  |
| Version Control  | Git, GitHub                     |

---

# 📂 Project Structure

```text
AWS-3Tier-Project/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── Backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── .github/
    └── workflows/
        └── frontend.yml
```

---

# 🔐 Authentication Flow

```text
User Login
      │
      ▼
Backend validates credentials
      │
      ▼
JWT Token generated
      │
      ▼
Token stored in Local Storage
      │
      ▼
Axios sends token in Authorization Header
      │
      ▼
Backend Middleware verifies JWT
      │
      ▼
Access granted to protected resources
```

---

# 🚀 Deployment Details

## Frontend Deployment

* Hosted on Amazon S3 Static Website Hosting.
* Built using Vite.

Deployment URL:

```text
http://aws-3tier-frontend-piyush.s3-website.ap-south-1.amazonaws.com/
```

---

## Backend Deployment

* Hosted on AWS Elastic Beanstalk.

Health Endpoint:

```text
http://aws-3-tier-backend-new-env-env.eba-ijwip34e.ap-south-1.elasticbeanstalk.com/health
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the Backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 🔄 CI/CD Pipeline

GitHub Actions workflow automatically:

1. Detects changes pushed to the `main` branch.
2. Installs project dependencies.
3. Builds the React application.
4. Deploys the latest build to Amazon S3.

Workflow File:

```text
.github/workflows/frontend.yml
```

---

# 📥 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/piyushw09/AWS-3Tier-Task.git
```

---

## Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

## Backend Setup

```bash
cd Backend

npm install

npm start
```

---

# 📸 Screenshots

Add screenshots of:

* Login Page
* Register Page
* Dashboard
* AWS S3 Hosting
* Elastic Beanstalk Dashboard
* GitHub Actions Workflow

---

# 🔮 Future Enhancements

* Password Hashing using bcrypt
* Refresh Token Mechanism
* Role-Based Access Control (RBAC)
* Forgot Password Functionality
* Docker Containerization
* Kubernetes Deployment
* CloudFront Integration
* Infrastructure as Code using Terraform

---

# 📈 Project Outcomes

* Successfully implemented a secure 3-Tier Architecture on AWS.
* Improved application security using JWT Authentication.
* Automated deployments using GitHub Actions.
* Gained hands-on experience with AWS, DevOps, and Full-Stack Development.

---

# 👨‍💻 Author

**Piyush Wadatkar**

AWS Cloud & DevOps Enthusiast

GitHub: https://github.com/piyushw09

LinkedIn: Add your LinkedIn profile URL here.

---

⭐ If you found this project useful, please consider giving it a star.
