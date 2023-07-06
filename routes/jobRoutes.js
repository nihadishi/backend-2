const express = require("express");
const { jobController } = require("../controllers/jobController");

const jobRoutes = express.Router();

jobRoutes.post("/", jobController.add);
jobRoutes.get("/", jobController.getAll);
jobRoutes.get("/:id", jobController.getJobById);
jobRoutes.delete("/:id", jobController.deleteJobById);
jobRoutes.put("/:id", jobController.updateJobById);

module.exports = {
  jobRoutes,
};
