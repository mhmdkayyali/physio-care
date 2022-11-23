const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/video", (req, res) => {
  res.sendFile(`index.html`, { root: __dirname });
});
