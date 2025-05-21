# International Great Faith Ministries Website

A modern, responsive website for International Great Faith Ministries (IGFM) built with React and Tailwind CSS.

## Overview

This project is inspired by the Watoto Church website with customizations for IGFM. It provides a complete ministry website solution with pages for:

- Home
- About
- Statement of Faith
- Ministries (including Berakhah Childcare, Berakhah Choir, Call2Prayer Mbale Church, Pastors Network Uganda, Church Planting, Widows and Elderly Care, and Children's Church)
- Partners
- Stories of Impact
- Donate
- Prayer
- Teaching
- Contact

## Technologies Used

- React.js
- React Router (HashRouter) for navigation
- Tailwind CSS for styling
- React Icons for UI icons
- Custom hooks for form handling and state management
- React Google reCAPTCHA for form security
- React Slick for image carousels and slideshows

## Features

- Fully responsive design that works on all devices
- Modern UI with smooth animations
- Interactive components
- Form validation
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone <repository-url>
```

2. Navigate to the project directory:
```
cd berakah
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173
```

## Project Structure

```
berakah/
├── public/           # Public assets
├── src/              # Source files
│   ├── assets/       # Images and static assets
│   ├── components/   # Reusable components
│   │   ├── common/   # Common components like Header, Footer
│   │   └── home/     # Home page specific components
│   ├── context/      # Context providers
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Page components
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── .gitignore        # Git ignore file
├── index.html        # HTML template
├── package.json      # Package configuration
├── README.md         # Project documentation
└── vite.config.js    # Vite configuration
```

## Customization

To customize this website for your church:

1. Update text content in the components
2. Replace placeholder images with your church's images
3. Update colors in Tailwind configuration to match your branding
4. Modify the navigation links as needed

## Deployment

To build for production:

```
npm run build
```

The build files will be in the `dist` directory, ready to be deployed to your hosting service.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspiration from [Watoto Church](https://watotochurch.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
