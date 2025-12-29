const express = require("express");
const app = express();

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Internship Application Management System Backend Running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
