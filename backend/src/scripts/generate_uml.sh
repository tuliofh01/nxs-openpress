#!/bin/bash
set -e

DOCS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../docs/uml_charts" && pwd)"
mkdir -p "$DOCS_DIR"

# 1. System Architecture Diagram
cat <<EOF > "$DOCS_DIR/architecture.dot"
digraph SystemArch {
    rankdir=LR;
    node [shape=box, style=filled, fillcolor=lightblue];

    User [shape=ellipse, fillcolor=lightgrey];
    Tunnel [label="Ngrok / Tunnel"];
    Frontend [label="React Client"];
    Backend [label="D Backend (vibe.d)"];
    DB [label="SQLite (WAL Mode)", shape=cylinder, fillcolor=lightyellow];
    Stripe [label="Stripe API", style=dashed];

    User -> Tunnel [label="HTTPS"];
    Tunnel -> Frontend [label="Serve Static"];
    Tunnel -> Backend [label="API Requests"];
    Backend -> DB [label="Read/Write"];
    Backend -> Stripe [label="Payments/Webhooks"];
}
EOF

# 2. Database Schema Diagram
cat <<EOF > "$DOCS_DIR/schema.dot"
digraph DBSchema {
    node [shape=record];

    User [label="{User|+ id\l+ email\l+ password_hash\l}"];
    Order [label="{Order|+ id\l+ user_id\l+ total\l+ status\l}"];
    Post [label="{Post|+ id\l+ title\l+ content\l}"];

    User -> Order [label="has many"];
    User -> Post [label="writes"];
}
EOF

echo "[DOCS] Rendering UML Charts..."
if command -v dot &> /dev/null; then
    dot -Tpng "$DOCS_DIR/architecture.dot" -o "$DOCS_DIR/architecture.png"
    dot -Tpng "$DOCS_DIR/schema.dot" -o "$DOCS_DIR/schema.png"
    echo "[DOCS] UML Charts generated in $DOCS_DIR"
else
    echo "[WARN] 'dot' command not found. Install graphviz to render charts."
fi

# Clean up .dot files as requested
rm "$DOCS_DIR/architecture.dot" "$DOCS_DIR/schema.dot"
