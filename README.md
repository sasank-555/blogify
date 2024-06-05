# Blogify 📚✍️

Welcome to **Blogify**! A modern and efficient blogging platform built with the latest technologies.

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About the Project

**Blogify** is a feature-rich blogging platform designed to offer a seamless writing and reading experience. This project leverages cutting-edge tools and libraries to provide an optimized and scalable solution for blogging needs.

## Technologies Used

- ⚛️ **React** - For building the user interface
- ⚡ **Vite** - For fast and optimized development
- 🔷 **TypeScript** - For type-safe JavaScript development
- 🌐 **Cloudflare Workers** - For serverless functions and edge computing
- 🛠️ **Prisma** - For database ORM
- 🚀 **Prisma Accelerate** - For performance improvements
- 🗄️ **Neon DB** - For database management
- 📜 **Zod** - For schema validation
- 📡 **Axios** - For HTTP requests

## Project Structure

The project is divided into three main folders:

- **frontend**: Contains the React application built with Vite.
- **common**: Contains shared utilities, types, and components used across the project.
- **backend**: Contains the server-side code, including Prisma setup, Cloudflare Workers, and API routes.

```
blogify/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── ...
├── common/
│   ├── utils/
│   ├── types/
│   └── ...
└── backend/
    ├── src/
    ├── prisma/
    ├── workers/
    └── ...
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- Prisma CLI
- Vite CLI
- Wrangler CLI (for Cloudflare Workers)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sasank_555/blogify.git
   ```
2. Navigate to the project directory
   ```sh
   cd blogify
   ```
3. Install dependencies for both frontend and backend
   ```sh
   cd frontend
   npm install
   # or
   yarn install
   cd ../backend
   npm install
   # or
   yarn install
   ```
4. Set up the environment variables
   - Create a `.env` file in the root of the `backend` directory
   - Add the necessary environment variables (refer to `backend/.env.example`)

5. Generate the Prisma client with Accelerate enabled
   ```sh
   cd backend
   npx prisma generate
   ```

### Usage

1. Start the development servers
   ```sh
   # Start backend server
   cd backend
   npm run dev
   # or
   yarn dev
   ```
   ```sh
   # Start frontend server
   cd frontend
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view the frontend in the browser.
3. The backend server will be running on [http://localhost:4000](http://localhost:4000).

### Running Migrations

To apply database migrations, use:
```sh
cd backend
npx prisma migrate dev
```

### Building for Production

To create an optimized production build, run:
```sh
# Build frontend
cd frontend
npm run build
# or
yarn build

# Build backend (if applicable)
cd ../backend
npm run build
# or
yarn build
```

### Deploying Cloudflare Workers

To deploy Cloudflare Workers, use:
```sh
cd backend/workers
wrangler publish
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Prisma](https://www.prisma.io/)
- [Prisma Accelerate](https://www.prisma.io/docs/concepts/components/prisma-accelerate)
- [Neon DB](https://neon.tech/)
- [Zod](https://github.com/colinhacks/zod)
- [Axios](https://axios-http.com/)
