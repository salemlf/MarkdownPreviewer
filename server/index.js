const path = require("path");
const express = require("express");
const app = express();
const socket = require("socket.io");
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "../client/build")));

//! example of handling GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

let server = app.listen(
  PORT,
  // *testing
  console.log(`Server is running on the port no: ${PORT} `)
  // *testing
);

const io = socket(server);

io.on("connection", (socket) => {
  socket.emit("hello", "world");
  // *testing
  console.log(socket.handshake.query);
  // *testing
  socket.on("markdown", (text) => {
    socket.emit("serverMessage", "Markdown in server: " + text);
  });
});
