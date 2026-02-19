# Local AI Model Setup for OpenPress

## 🚀 Getting Started with Local Agents
To use the "Code Reviewer" and "Architect" agents configured in your IDE, you must download the models first.

### 1. Install Ollama (If not already installed)
These agents run on your local machine using Ollama.

### 2. Download Models
Open your terminal and run these commands **one by one**:

```bash
# For the Code Reviewer (DeepSeek Coder 6.7B)
ollama pull deepseek-coder:6.7b

# For the Architect (Qwen 2.5 7B)
ollama pull qwen2.5:7b
```

### 3. Usage
*   Open the "Continue" chat in VS Code.
*   Select **🧐 Code Reviewer (Local)** from the dropdown for strict code audits.
*   Select **🧠 Architect (Local)** for system design questions.
*   Select **🎨 UI & Design (Gemini)** for frontend and SVG tasks.
