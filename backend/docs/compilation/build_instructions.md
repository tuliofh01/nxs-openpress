# Compilation Instructions

## Prerequisites
- D Compiler (DMD or LDC)
- DUB Package Manager
- G++ (GCC 10+ for C++20 support)
- Graphviz (for UML generation)

## Building
Run the build script:
\`\`\`bash
./backend/src/scripts/build_all.sh
\`\`\`

This will:
1. Compile the C++ logic into `libs/cpp_libs/liblogic.so`.
2. Build the D application using `dub`.
3. Place the artifact in `backend/builds/`.
