const debug = require("debug");
const http = require("http");
const app = require("./app.js");

// function for checking port no. is valid
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.system !== "listen") {
    throw error;
  }
  const addr = server.address();
  const bind = typeof addr == "string" ? "pipe" : "port" + port;

  switch (error.code) {
    case "EACCESS":
      console.error(bind + " requires Elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error(bind + " already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr == "string" ? "pipe" : "port" + port;
  debug("Listening on" + bind);
}

const port = normalizePort(process.env.PORT || "8080");

app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

server.listen(port);
