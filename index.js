const express = require("express");
const cors = require("cors");
const { db } = require("./db");
const { locationRoutes } = require("./routes/locationRoutes");
const { jobRoutes } = require("./routes/jobRoutes");
const app = express();
require("dotenv").config();

db.connect();

app.use(express.json());
app.use(cors());
app.use("/api/locations", locationRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", async (req, res) => {
  res.send("Yes");
});
app.listen(8080, () => {
  console.log("Server");
});
