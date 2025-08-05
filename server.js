const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/track", (req, res) => {
  const data = req.body;
  console.log("Data received:", data);

  // Save to file
  fs.readFile("data.json", (err, fileData) => {
    let json = [];
    if (!err && fileData.length > 0) {
      json = JSON.parse(fileData);
    }
    json.push(data);
    fs.writeFile("data.json", JSON.stringify(json, null, 2), () => {
      res.json({ message: "Data received" });
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
