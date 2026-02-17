# OpenPress

> **A High-Performance, Self-Hostable Blog & E-Commerce Platform.**
> *Open Source (Apache 2.0) | Built for Speed & Flexibility | Accessible*

---

## 📖 Overview

**OpenPress** is a modern, open-source platform designed to democratize high-performance e-commerce and content publishing. It bridges the gap between ease of use and raw system power by combining a **D (vibe.d)** backend with a **React (Vite + Bun)** frontend.

### Core Philosophy
1.  **Performance Accessible**: We use **D** and **C++20** to deliver native speed without the complexity often associated with systems programming.
2.  **Self-Hosting First**: Optimized to run on modest hardware, even behind restrictive networks (NAT) using tunneling.
3.  **Strictly Typed & Safe**: From the database (SQL/WAL) to the frontend (TypeScript), data integrity is paramount.
4.  **Developer Experience**: A "Perfect OSS" setup with pre-configured VS Code environments, Bun for fast frontend builds, and automated tooling.

---

## 🏗️ Architecture (Monorepo)

This repository is structured as a monorepo containing both the server and client applications.

```text
openpress/
├── backend/                # The Core Server
│   ├── src/                # D (vibe.d) & C++20 Logic
│   ├── assets/             # SQL Scripts & Configuration
│   └── docs/               # Architecture & Man Pages
├── frontend/               # The User Interface
│   ├── src/                # React + TypeScript
│   └── public/             # Static Assets
└── LICENSE                 # Apache 2.0 License
```

---

## 🚀 Getting Started

### Prerequisites
*   **Backend**: D Compiler (DMD/LDC), DUB, G++ (GCC 10+), SQLite3.
*   **Frontend**: Bun (v1.0+).

### Quick Start Guide

#### 1. Backend (Server)
The backend handles API requests, database interactions, and business logic.

```bash
cd backend
# Compile C++ logic and Build D Server
./src/scripts/build_all.sh

# Run the server
./builds/current-server/openpress-server
```
*The server will start on `http://localhost:8080`.*

#### 2. Frontend (Client)
The frontend is a React application powered by Vite and Bun.

```bash
cd frontend
# Install dependencies (fast!)
bun install

# Start development server
bun run dev
```
*The application will be accessible at `http://localhost:5173`.*

---

## 📖 Detailed Usage Guide

### Configuration
OpenPress is configured via JSON files located in `backend/assets/json_files/`.
*   **`server_constants/limits.json`**: Tune HTTP timeouts, upload sizes, and session durations.
*   **Environment Variables**:
    *   `PORT`: Override the default port (8080).
    *   `DATABASE_URL`: Path to the SQLite database (default: `backend/assets/database/openpress.db`).

### Database Management
The system uses SQLite in WAL mode.
*   **Schema**: Located in `backend/assets/database/schema/main.sql`.
*   **Migrations**: Run automatically on startup (future implementation) or manually via provided scripts.

### Troubleshooting

#### Build Failures
*   **Missing C++ Logic**: Ensure `liblogic.so` is built first. Run `./src/scripts/build_all.sh` instead of `dub build` directly.
*   **DUB Dependency Issues**: If you see "broken package" warnings, try cleaning the cache:
    ```bash
    dub clean --all-packages
    dub upgrade --force-remove
    ```

#### Runtime Issues
*   **Database Locked**: Ensure WAL mode is enabled (`PRAGMA journal_mode=WAL;`). The server does this automatically, but external tools might lock the file.
*   **Frontend Connection Refused**: Ensure the backend is running on port 8080. Check `frontend/vite.config.ts` proxy settings.

---

## 🛠️ Development & Contribution

We have configured this project for a seamless **VS Code** experience.

1.  Open the `openpress/` folder in VS Code.
2.  Install the **Recommended Extensions** (D, C++, ESLint, Prettier).
3.  Use **Tasks** (`Ctrl+Shift+B`):
    *   `Build OpenPress` (Backend)
    *   `bun: dev` (Frontend)
    *   `bun: build` (Frontend Production)

### License
This project is licensed under the **Apache License 2.0**. See the [LICENSE](./LICENSE) file for details.
