import arsd.minigui;
import std.process;
import std.stdio;
import std.file;
import std.path;
import std.conv;

void main() {
    // Create the main window
    auto window = new MainWindow("OpenPress Launcher", 400, 300);

    // Layout container
    auto layout = new VerticalLayout(window);
    
    // Status Label
    auto statusLabel = new TextLabel("Status: Stopped", layout);
    
    // Server Control
    new Button("Start Server", layout).addEventListener("click", (Event event) {
        try {
            // Path to the server executable (relative to where launcher is run)
            // Assuming launcher is run from openpress/launcher/
            string serverPath = buildPath("..", "backend", "builds", "current-server", "openpress-server");
            
            if (!exists(serverPath)) {
                statusLabel.label = "Error: Server binary not found!";
                return;
            }

            // Spawn server process
            auto pid = spawnProcess([serverPath]);
            statusLabel.label = "Server Started (PID: " ~ pid.processID.to!string ~ ")";
        } catch (Exception e) {
            statusLabel.label = "Error: " ~ e.msg;
        }
    });

    new Button("Stop Server (Kill All)", layout).addEventListener("click", (Event event) {
        try {
            // Simple kill command for Linux
            auto pid = spawnProcess(["pkill", "openpress-server"]);
            wait(pid);
            statusLabel.label = "Server Stopped";
        } catch (Exception e) {
            statusLabel.label = "Error stopping: " ~ e.msg;
        }
    });

    // Tunnel Control
    new Button("Start Tunnel (Ngrok)", layout).addEventListener("click", (Event event) {
         try {
            // Assumes ngrok is in PATH
            auto pid = spawnProcess(["ngrok", "http", "8080"]);
            statusLabel.label = "Tunnel Started (PID: " ~ pid.processID.to!string ~ ")";
        } catch (Exception e) {
            statusLabel.label = "Error: " ~ e.msg;
        }
    });
    
    // Enter the GUI event loop
    window.loop();
}
