const express = require("express");
const { locationController } = require("../controllers/locationController");

const locationRoutes = express.Router();

locationRoutes.post("/", locationController.add);
locationRoutes.get("/", locationController.getAll);
locationRoutes.delete("/:id", locationController.deleteLocationById);
locationRoutes.get("/:id", locationController.getLocationById);
locationRoutes.put("/:id", locationController.updateLocationById);

module.exports = {
  locationRoutes,
};
