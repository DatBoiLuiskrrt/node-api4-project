require("dotenv").config();
console.log(process.env.PORT, process.env.NODE_ENV);
const cors = require("cors");
const express = require("express");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/users", (req, res) => {
  res.json([
    { id: 1, username: "foo" },
    { id: 2, username: "faa" },
    { id: 3, username: "fee" },
  ]);
});

server.use("*", (req, res, next) => {
  res.send(`<h1>Hello, there!</h1>`);
});

server.use((error, req, res, next) => {
  res.status(500).son({
    message: error.message,
    stack: error.stack,
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
