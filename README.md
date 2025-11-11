# TitanX Practice Frontend

## Overview

This is a modern React application built with Vite, featuring Material UI components and Tailwind CSS for styling. The project follows a structured architecture to ensure maintainability and scalability.

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **Material UI**: React component library implementing Google's Material Design
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESLint & Prettier**: Code quality and formatting tools

## Project Structure

```
client/
├── public/            # Static files
├── src/
│   ├── assets/        # Images, fonts, and other static assets
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API services and utilities
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── .eslintrc.cjs      # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

```Terminal
# Change Dir
cd client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment on Vercel. The root directory for deployment is set to the `client` folder as specified in the `.vercel/project.json` file.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
