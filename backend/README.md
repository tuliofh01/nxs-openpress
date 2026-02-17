# OpenPress Backend

## 🚀 The Essence
OpenPress is a high-performance, open-source Blog and E-Commerce platform designed for the modern web. Built with **D (vibe.d)** and **C++20**, it bridges the gap between developer productivity and raw system performance. 

Our goal is to make **performant code accessible**. By leveraging D's expressiveness for business logic and C++ for compute-heavy tasks, OpenPress runs efficiently on modest hardware (perfect for self-hosting) while scaling to meet production demands.

## 🛠️ The Tech Stack
*   **Core Backend**: [D Language](https://dlang.org/) with [vibe.d](https://vibed.org/) (Asynchronous I/O, Fiber-based concurrency).
*   **Performance Layer**: **C++20** (via `extern (C)` bindings) for specialized algorithms.
*   **Database**: SQLite3 with **WAL (Write-Ahead Logging)** mode for concurrent read/write operations.
*   **Frontend**: React + TypeScript (Vite) - Served statically or via reverse proxy.
*   **Architecture**: MVC (Model-View-Controller) with strict separation of concerns.

## 🏗️ Project Structure
The backend is organized to promote modularity and ease of contribution:

```text
backend/
├── assets/                 # Runtime resources
│   ├── database/           # SQL scripts (Schema & Logic decoupled from code)
│   ├── json_files/         # Configuration & Constants
│   └── gallery/            # Static assets
├── libs/                   # Local dependencies
│   ├── cpp_libs/           # Compiled C++ shared objects (.so/.dll)
│   └── dlang_libs/         # Local D packages
├── src/                    # Source Code
│   ├── app.d               # Application Entry Point
│   ├── controllers/        # REST API Handlers
│   ├── models/             # Data Structures (Structs/Classes)
│   ├── services/           # Business Logic
│   ├── interface/          # D bindings for C++ interop
│   └── scripts/            # Build & Maintenance scripts
├── docs/                   # Comprehensive Documentation
│   ├── man/                # Unix Man Pages
│   └── uml_charts/         # Architecture Diagrams
└── builds/                 # Compiled binaries (timestamped)
```

## ⚡ Performance & Accessibility
OpenPress demonstrates how to integrate modern C++20 features (like `std::span` and Concepts) directly into a D web server. 
- **Low Latency**: Native compilation means no VM warmup or GC pauses typical of interpreted languages.
- **Concurrency**: vibe.d uses efficient event loops (similar to Node.js but typed and compiled).
- **Interop**: We prove that extending a web server with C++ is seamless, allowing you to drop down to the metal whenever necessary.

## 📖 Usage Guide

### Prerequisites
- D Compiler (DMD/LDC) & DUB
- G++ (GCC 10+)
- SQLite3

### Building the Project
We provide a unified build script that compiles the C++ logic first, links it, and then builds the D server.

```bash
# From the backend directory
./src/scripts/build_all.sh
```

### Running the Server
After building, the binary is located in `builds/current-server`.

```bash
./builds/current-server/openpress-server
```

### Configuration
Edit `config_files/app_config.json` or `assets/json_files/` to tune server parameters without recompiling.

## 🤝 Contributing
Please read the documentation in `docs/` before submitting a PR. We follow strict coding standards and require tests for new features.
