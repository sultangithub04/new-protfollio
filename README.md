# 🌐 Personal Portfolio Website (Frontend)

A modern, responsive personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring **ISR**, **dynamic blog management**, **project showcase**, and a **secure owner dashboard**.

This repository contains the **frontend** of the portfolio.  
The **backend** (Express + Prisma + PostgreSQL) is hosted separately.

---

## 🚀 Live Links

- **Frontend (Vercel):** [https://new-protfollio.vercel.app](https://new-protfollio.vercel.app)
- **Backend API (Vercel):** [https://portfoliobackend-ebon.vercel.app](https://portfoliobackend-ebon.vercel.app)

---

## 📖 Project Overview

This portfolio website serves as both a public-facing showcase and a private dashboard for managing content.

### ✨ Key Features

#### 🧭 Public Pages
- **Home / About Me:**  
  Static personal info, fetched via **SSG** for speed.
- **Blog:**  
  - View all blogs (ISR-enabled for incremental updates).  
  - Individual blog pages generated using `getStaticPaths` + `revalidate`.
- **Projects:**  
  Dynamic project listing using **ISR** for efficient regeneration.

#### 🔐 Private Dashboard
- **Authentication & Authorization:**  
  - Secure JWT-based login for the owner only.  
  - Passwords stored as bcrypt hashes.
- **Dashboard Access:**  
  - Create, edit, delete blogs and projects.  
  - Manage content via a user-friendly interface.

#### 💬 Feedback & Error Handling
- Integrated **react-hot-toast** for instant success/error messages.
- Comprehensive **form validation** with clear user messages.
- Handles API/network/unauthorized errors gracefully.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State | React Hooks / Context |
| Notifications | react-hot-toast |
| Deployment | Vercel |
| Auth | JWT (via backend) |
| Data Fetching | ISR / SSG / CSR (as needed) |

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/portfolio-frontend.git
cd portfolio-frontend
```
### 2. Install Dependencies
```bash
npm install
```