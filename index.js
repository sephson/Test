const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
  console.log("Data", req.body);
  const { subject, email, text } = req.body;
  if (!email || !text) {
    res
      .status(403)
      .json({ message: "Please input your email and Write a Text" });
  }
  res.status(200).json({
    message: "Your Message was Sent! Disu Will get in touch with you soon",
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 5000, () => console.log("Server is running"));

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
