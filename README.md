# 🚗 DriveFleet — Car Rental Platform

<div align="center">

**Smart fleet management platform for efficient operations, real-time tracking, and seamless transportation control.**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Pages](#-available-pages)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🌟 Overview

**DriveFleet** is a full-stack car rental web application built with Next.js 16 and React 19. It allows users to browse a curated fleet of premium vehicles, view detailed car information, make bookings, and manage their reservations — all through a clean, mobile-first interface.

The platform supports authenticated users who can also list their own vehicles for rental, making it a two-sided marketplace for car rentals.

---

## 🔗 Live Demo

👉 **[https://drive-fleet-car-rental.vercel.app/](https://drive-fleet-car-rental.vercel.app/)**

---

## ✨ Features

- 🏎️ **Browse Fleet** — Explore a wide selection of cars filtered by type (Luxury, SUV, Sedan, Hatchback) with pricing, location, and availability
- 🔍 **Car Details** — View full specs, descriptions, and per-day rental pricing for each vehicle
- 📅 **Booking System** — Book a car with date selection and instant confirmation
- 📂 **My Bookings** — Authenticated users can view and manage all their reservations
- ➕ **Add a Car** — List your own vehicle for rental on the platform
- 🔐 **Authentication** — Secure login/signup via `better-auth` with MongoDB session management
- 🌍 **Popular Destinations** — Curated destination highlights (Coastal Drive, Mountain Peaks, City Lights, Euro Getaway)
- 📱 **Responsive Design** — Mobile-first UI built with Tailwind CSS v4 and HeroUI components
- 🔔 **Toast Notifications** — Real-time user feedback via `react-toastify`

---

## 🛠️ Tech Stack

| Category       | Technology                                      |
|----------------|-------------------------------------------------|
| Framework      | [Next.js 16](https://nextjs.org/) (App Router)  |
| UI Library     | [React 19](https://react.dev/)                  |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com/)     |
| Component Lib  | [HeroUI](https://heroui.com/)                   |
| Database       | [MongoDB](https://www.mongodb.com/)             |
| Auth           | [better-auth](https://better-auth.com/) + MongoDB Adapter |
| Icons          | [Lucide React](https://lucide.dev/) · [React Icons](https://react-icons.github.io/react-icons/) |
| Notifications  | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| Linting        | ESLint (Next.js config)                         |
| Deployment     | [Vercel](https://vercel.com/)                   |

---

## 📁 Project Structure

```
drive-fleet-car-rental/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.js          # Home page
│   │   ├── explore-cars/    # Car listing & detail pages
│   │   │   └── [id]/        # Dynamic car detail route
│   │   ├── add-car/         # Add a new car listing
│   │   ├── my-bookings/     # User booking history
│   │   └── layout.js        # Root layout
│   ├── components/          # Reusable UI components
│   ├── lib/                 # DB connection, auth config, utilities
│   └── styles/              # Global CSS
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** / **yarn** / **pnpm** / **bun**
- A running **MongoDB** instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rashedulislam595/Assignment-9-DriveFleet-Car-Renta-Platform.git
cd Assignment-9-DriveFleet-Car-Renta-Platform
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables) below).

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> ⚠️ Never commit your `.env.local` file. It is already included in `.gitignore`.

---

## 📄 Available Pages

| Route                    | Description                              |
|--------------------------|------------------------------------------|
| `/`                      | Home page with featured cars & highlights |
| `/explore-cars`          | Browse the full car fleet                |
| `/explore-cars/[id]`     | Individual car detail & booking page     |
| `/add-car`               | Form to list a new vehicle               |
| `/my-bookings`           | View and manage your reservations        |

---

### Home Page
> Featured cars, destination highlights, and available-cars section.

### Explore Cars
> Grid view of all available vehicles with category, location, price, and seat info.

### Car Detail
> Full description, specs, and booking form for a single vehicle.

---

## 🚢 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push the project to your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Add your environment variables in the Vercel project settings.
4. Click **Deploy** — Vercel handles the rest automatically.

Alternatively, refer to the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.

---

## 👨‍💻 Author

**Rashedul Islam**

- GitHub: [@rashedulislam595](https://github.com/rashedulislam595)
- Live Project: [drive-fleet-car-rental.vercel.app](https://drive-fleet-car-rental.vercel.app/)

---

<div align="center">

© 2026 DriveFleet. All rights reserved.

</div>