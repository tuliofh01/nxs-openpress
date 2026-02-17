module controllers.logger_controller;

import vibe.vibe;
import std.stdio;

class LoggerController
{
    // TODO: Inject DB connection here
    
    void getLogs(HTTPServerRequest req, HTTPServerResponse res)
    {
        // TODO: Read from DB
        res.writeBody("Logs will appear here (fetched from SQLite)", "text/plain");
    }

    void postLog(HTTPServerRequest req, HTTPServerResponse res)
    {
        auto json = req.json;
        string level = json["level"].get!string;
        string msg = json["message"].get!string;
        
        // TODO: Use the assets/database/scripts/logging/log_error.sql file
        logInfo("Received Log: [%s] %s", level, msg);
        
        res.writeBody("Log saved", "text/plain");
    }
}
