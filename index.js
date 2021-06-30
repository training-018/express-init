const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World ...");
});

app.post("/post", (req, res) => {
  res.send("Got a POST request at /post");
});

app.put("/put", (req, res) => {
  res.send("Got a PUT request at /put");
});

app.delete("/delete", (req, res) => {
  res.send("Got a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT} ENJOY =)`);
});
