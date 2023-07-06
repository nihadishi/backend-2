const { location } = require("../models/Location");

const locationController = {
  add: async (req, res) => {
    try {
      let Location = new location({
        name: req.body.name,
        icon: req.body.icon,
      });
      await Location.save();
      res.status(201).json(Location);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAll: async (req, res) => {
    let data = await location.find();
    res.json(data);
  },
  deleteLocationById: (req, res) => {
    location
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({
          msg: "Deleted Successfully",
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getLocationById: async (req, res) => {
    try {
      const data = await location.findById(req.params.id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: "Not Found",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateLocationById: async (req, res) => {
    let id = req.params.id;
    let newLocation = {
      name: req.body.name,
      icon: req.body.icon,
      updated_at: new Date(),
    };
    location
      .findByIdAndUpdate(id, newLocation, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = {
  locationController,
};
