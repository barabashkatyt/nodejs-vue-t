const express = require("express");
const path = require("path");
const { v4 } = require("uuid");
const app = express();

const CONTACTS = [
  { id: v4(), name: "Vasili", value: "456654654654", marked: false },
];

//GET
app.get("/api/contacts", (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS);
  }, 1000);
});

//POST
app.post("/api/contacts", (req, res) => {});

app.use(express.static(path.resolve(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(3000, () => {
  console.log("Server has been started on port 3000");
});
