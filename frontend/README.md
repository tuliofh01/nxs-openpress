# OpenPress Frontend

This is the React + TypeScript frontend for the OpenPress platform. It communicates with the D backend via a proxy.

## 🚀 Tech Stack
- **Framework**: React + TypeScript
- **Build Tool**: Vite (powered by Bun)
- **Styling**: SCSS
- **State Management**: React Hooks / Context

## 🛠️ Prerequisites
- [Bun](https://bun.sh/) (v1.0+)

## 📦 Installation
Install dependencies using Bun:
```bash
cd frontend
bun install
```

## 💻 Development
Start the dev server:
```bash
bun run dev
```
The application will run at `http://localhost:5173`.
API requests to `/api` are proxied to the backend at `http://localhost:8080`.

## 🏗️ Build
To create a production build:
```bash
bun run build
```
The output will be in the `dist/` directory.

## 🧪 VS Code Integration
This folder includes a `.vscode` directory with:
- **Tasks**: predefined `bun: dev` and `bun: build` tasks.
- **Launch**: A Chrome debugger configuration.
- **Extensions**: Recommended plugins for React/TS/SCSS.
