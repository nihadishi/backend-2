const { Job } = require("../models/Job");

const jobController = {
  add: async (req, res) => {
    try {
      let job = new Job({
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description,
        minSalary: req.body.minSalary,
        maxSalary: req.body.maxSalary,
        locations: req.body.locations,
      });
      await job.save();
      res.status(201).json(job);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAll: async (req, res) => {
    let data = await Job.find().populate("locations");
    res.json(data);
  },
  deleteJobById: (req, res) => {
    Job.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({
          msg: "Deleted",
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getJobById: async (req, res) => {
    try {
      const data = await Job.findById(req.params.id);
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
  updateJobById: async (req, res) => {
    let id = req.params.id;
    let newJob = {
      title: req.body.title,
      summary: req.body.summary,
      description: req.body.description,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      updated_at: new Date(),
    };
    Job.findByIdAndUpdate(id, newJob, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = {
  jobController,
};
