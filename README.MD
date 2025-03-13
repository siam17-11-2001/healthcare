# Health Care

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://health-care-f14b8.firebaseapp.com)

## 📌 Introduction

**Health Care** is a user-friendly and fully responsive e-commerce-based web application where users can explore a variety of medical equipment, including medicines. The platform offers convenient features for shopping, managing carts, processing payments, and filtering products.

---

## 📖 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Project Configuration](#-project-configuration)
- [Installation](#-installation)
- [Dependencies](#-dependencies)
- [Dev Dependencies](#-dev-dependencies)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Live Demo

🔗 **[Visit Health Care](https://health-care-f14b8.firebaseapp.com)**

---

## ✨ Features

- 🔑 **Authentication** – Implemented authentication using Firebase for secure user sign-up and login.
- 🛒 **Add to Cart** – Allows users to add medical products to their cart.
- 📱 **Fully Responsive** – Designed to work seamlessly across devices.
- 💳 **Stripe Payment Integration** – Integrated payment system for safe and easy transactions.
- 🔍 **Search Functionality** – Find medical products by name, category, or other attributes.
- 📅 **Date Range Filter** – Filter products based on the available date range.
- 💵 **Sort by Price** – Sort medical products based on price.
- 🔢 **Pagination** – Easily navigate through large product lists.
- 🛠️ **Admin Panel** – Admin can manage users, products, and more.
- 📊 **Dynamic Dashboard** – Admin dashboard with dynamic statistics and reports.
- 🔑 **Access Token via Local Storage** – Ensures secure token management for users.

---

## 🛠️ Dependencies

```json
"dependencies": {
  "@headlessui/react": "^2.2.0",
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "axios": "^1.7.9",
  "date-fns": "^4.1.0",
  "dom-to-image": "^2.6.0",
  "firebase": "^11.1.0",
  "i18next": "^24.2.2",
  "i18next-browser-languagedetector": "^8.0.2",
  "jspdf": "^2.5.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "lucide-react": "^0.474.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-countdown": "^2.3.6",
  "react-dom": "^18.3.1",
  "react-helmet": "^6.1.0",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-i18next": "^15.4.0",
  "react-icons": "^5.4.0",
  "react-moment": "^1.1.3",
  "react-router-dom": "^7.1.3",
  "react-spinners": "^0.15.0",
  "react-toastify": "^11.0.3",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}

"devDependencies": {
  "@eslint/js": "^9.17.0",
  "@storybook/react-vite": "^8.5.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.23",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.3.3",
  "vite": "^6.0.5"
}
```

## ⚙️ Installation

git clone https://github.com/your-username/health-care.git
cd health-care
npm install
npm run devhttp://localhost:3000

## 🤝 Contributing

We welcome contributions to improve the platform! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m 'Add your feature').
Push to your branch (git push origin feature/your-feature).
Open a pull request.

## 📝 License

This `README.md` provides a clear structure with:

- **Live Demo** link for quick access.
- **Features** section listing the major capabilities of the application.
- **Project Configuration** for setting up the environment with environment variables.
- **Installation steps** to get the project running locally.
- **Dependencies** and **Dev Dependencies** for the project.
- **Contributing** guidelines for open-source contributions.
- **License** section for the project’s license.

Feel free to adjust the links, URLs, and details to match your project and preferences!

## 🔧 Project Configuration

### Environment Variables:

To set up the environment for the application, use the following variables in your `.env` file:

```bash
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID



```
