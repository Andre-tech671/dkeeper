# 📚 DFINITY Project Structure - dkeeper

A comprehensive documentation of the dkeeper project structure, which is a DFINITY Internet Computer application with a Motoko backend and React/Vite frontend.

## 🏗️ Project Overview

```
dkeeper/
├── .gitignore
├── README.md                    # Project documentation
├── dfx.json                     # DFX configuration for Internet Computer
├── package.json                 # Root npm workspace configuration
├── tsconfig.json                # TypeScript configuration
├── package-lock.json            # npm dependency lock file
└── src/
    ├── dkeeper_backend/         # Motoko backend canister
    │   └── main.mo             # Main backend actor implementation
    └── dkeeper_frontend/       # React frontend application
        ├── index.html          # HTML entry point
        ├── package.json        # Frontend dependencies and scripts
        ├── tsconfig.json       # Frontend TypeScript configuration
        ├── vite.config.js      # Vite build configuration
        ├── public/             # Static assets
        │   ├── .ic-assets.json5
        │   ├── favicon.ico
        │   └── logo2.svg
        └── src/                # Source code
            ├── main.jsx        # React app entry point
            ├── App.jsx         # Main React component
            ├── index.scss      # Global styles
            └── vite-env.d.ts   # Vite type definitions
```

## 📁 File Descriptions

### Root Directory Files

| File | Purpose |
|------|---------|
| `.gitignore` | Specifies intentionally untracked files to ignore |
| `README.md` | Project documentation (this file) |
| `dfx.json` | DFX configuration defining canisters and build settings |
| `package.json` | Root npm workspace configuration |
| `tsconfig.json` | TypeScript compiler options for the workspace |
| `package-lock.json` | Exact dependency tree lock file |

### Backend (Motoko)

| File | Purpose |
|------|---------|
| `src/dkeeper_backend/main.mo` | Main Motoko actor with business logic |

### Frontend (React/Vite)

| File | Purpose |
|------|---------|
| `src/dkeeper_frontend/index.html` | HTML entry point for the React app |
| `src/dkeeper_frontend/package.json` | Frontend dependencies and npm scripts |
| `src/dkeeper_frontend/tsconfig.json` | TypeScript configuration for frontend |
| `src/dkeeper_frontend/vite.config.js` | Vite bundler configuration |
| `src/dkeeper_frontend/src/main.jsx` | React app initialization |
| `src/dkeeper_frontend/src/App.jsx` | Main React component |
| `src/dkeeper_frontend/src/index.scss` | Global SCSS styles |
| `src/dkeeper_frontend/src/vite-env.d.ts` | Vite type declarations |
| `src/dkeeper_frontend/public/` | Static assets (favicon, logos) |

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm >= 7.0.0
- DFINITY SDK (dfx)

### Installation

```bash
# Install dependencies
npm install

# Setup canisters and deploy
cd src/dkeeper_frontend
npm run setup
```

### Development

#### Start the local replica
```bash
dfx start --background
```

#### Deploy to local replica
```bash
dfx deploy
```

#### Start frontend development server
```bash
npm start
# OR
cd src/dkeeper_frontend && npm start
```

The frontend will be available at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Building for Production

```bash
# Build frontend
cd src/dkeeper_frontend && npm run build

# Generate candid interface
npm run generate
```

## 🏗️ Architecture

### Backend (Motoko)
- **Language**: Motoko
- **Type**: Canister (smart contract on ICP)
- **File**: `src/dkeeper_backend/main.mo`

### Frontend (React)
- **Framework**: React 18
- **Language**: TypeScript/JavaScript
- **Build Tool**: Vite
- **Styling**: SCSS
- **Location**: `src/dkeeper_frontend/`

### Canisters

| Canister | Type | Description |
|----------|------|-------------|
| `dkeeper_backend` | Motoko | Backend logic and data storage |
| `dkeeper_frontend` | Assets | Static web assets for the frontend |
| `internet_identity` | Custom | Internet Identity authentication (pre-configured) |

## 📦 Dependencies

### Frontend Dependencies
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `@dfinity/agent` ^3.0.0
- `@dfinity/candid` ^3.0.0
- `@dfinity/principal` ^3.0.0

### Frontend Dev Dependencies
- `@types/react` ^18.2.14
- `@types/react-dom` ^18.2.6
- `@vitejs/plugin-react` ^4.0.1
- `typescript` ^5.1.3
- `vite` ^4.3.9
- `sass` ^1.63.6

## 🔧 Configuration

### DFX Configuration (`dfx.json`)
Defines the canisters, their types, dependencies, and remote IDs for Internet Computer deployment.

### Vite Configuration (`vite.config.js`)
Configures the Vite build process, including:
- Environment variables setup
- Plugin configuration
- Build options

## 📖 Learn More

- [Internet Computer Documentation](https://internetcomputer.org/docs/)
- [Motoko Programming Language](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [DFINITY Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Quick Start Guide](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)

## 📄 License

This project is licensed under the terms of the MIT license.

