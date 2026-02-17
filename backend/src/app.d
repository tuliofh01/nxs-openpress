import vibe.vibe;
import std.stdio;
import std.file;
import controllers.logger_controller;
import interface.interop;

void main()
{
	auto settings = new HTTPServerSettings;
	settings.port = 8080;
	settings.bindAddresses = ["::1", "127.0.0.1"];

	auto router = new URLRouter;
	
    // Register Logger Controller
    auto logger = new LoggerController();
	router.get("/api/logs", &logger.getLogs);
    router.post("/api/logs", &logger.postLog);

    // Test C++ Interop
    writeln("Testing C++ Interop: calculate_tax(100, 0.2) = ", calculate_tax(100.0, 0.2));

	listenHTTP(settings, router);

	logInfo("OpenPress Server running on http://127.0.0.1:8080");
	runEventLoop();
}
