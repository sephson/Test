
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELOO");
});

app.listen(process.env.PORT || 5000, () => console.log("Server is running"));
