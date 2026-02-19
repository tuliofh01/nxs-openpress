# OpenPress - Agent Instruction Manual

## 🧠 Project Context
**Name:** OpenPress
**Purpose:** High-performance, self-hostable blog & e-commerce platform.
**Philosophy:** Strictly typed, native performance, low resource usage.

## 🛠️ Tech Stack & Architecture (Monorepo)

### 1. Backend (`backend/`)
*   **Language:** D (vibe.d) + C++20 (Logic).
*   **Build System:** `dub` (D) + `g++` (C++).
*   **Database:** SQLite3 (WAL mode).
*   **Key Files:**
    *   `src/scripts/build_all.sh`: **ALWAYS** use this to build. Do not run `dub build` directly if C++ logic changes.
    *   `assets/database/schema/main.sql`: Database schema.

### 2. Frontend (`frontend/`)
*   **Framework:** React + TypeScript + Vite.
*   **Runtime/Bundler:** Bun.
*   **Styling:** SCSS.
*   **Key Commands:**
    *   `bun install`: Install dependencies.
    *   `bun run dev`: Start dev server.
    *   `bun run build`: Production build.

### 3. Launcher (`launcher/`)
*   **Purpose:** Utility to manage the OpenPress instance.
*   **Tech:** D (arsd).

## ⚠️ Agent Rules
1.  **Builds:** Always check for `build_all.sh` before attempting custom compile commands.
2.  **Package Management:** Use `bun` for frontend, `dub` for backend. NEVER use `npm` or `yarn`.
3.  **Pathing:** Respect the `backend/` and `frontend/` split.
4.  **Formatting:**
    *   **D:** Use `webfreak.code-d` / `dfmt`.
    *   **TS/React:** Use `Prettier`.
