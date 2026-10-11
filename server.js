const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "UBK Base",
    version: "1.0.0",
    status: "running",
    message: "Welcome to UBK Base API!"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "UBK Base API is working"
  });
});

app.get("/api/projects", (req, res) => {
  res.json({
    success: true,
    projects: []
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`UBK Base is running on port ${PORT}`);
});
