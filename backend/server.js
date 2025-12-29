const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root test route
app.get("/", (req, res) => {
  res.send("Internship Application Management System Backend Running");
});

// API test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
