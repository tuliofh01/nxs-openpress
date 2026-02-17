#!/bin/bash
set -e

# Define paths
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
BACKEND_DIR="$PROJECT_ROOT/backend"
CPP_SRC="$BACKEND_DIR/src/cpp_src/code/logic.cpp"
CPP_LIB_DIR="$BACKEND_DIR/libs/cpp_libs"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "[BUILD] Compiling C++20 Logic..."
mkdir -p "$CPP_LIB_DIR"
g++ -std=c++20 -shared -fPIC -o "$CPP_LIB_DIR/liblogic.so" "$CPP_SRC"

echo "[BUILD] Building D Server..."
cd "$BACKEND_DIR"
dub build --force

# Move binary to builds folder with timestamp
mkdir -p "$BACKEND_DIR/builds/$TIMESTAMP"
mv "$BACKEND_DIR/builds/openpress" "$BACKEND_DIR/builds/$TIMESTAMP/openpress-server"
ln -sf "$BACKEND_DIR/builds/$TIMESTAMP/openpress-server" "$BACKEND_DIR/builds/current-server"

echo "[SUCCESS] Build complete: $BACKEND_DIR/builds/$TIMESTAMP/openpress-server"
