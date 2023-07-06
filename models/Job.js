//title, summary, description, minSalary, maxSalary,
///locations[]

const { default: mongoose } = require("mongoose");

const JobSchema = mongoose.Schema({
  title: String,
  summary: String,
  description: String,
  minSalary: Number,
  maxSalary: Number,
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Job = mongoose.model("Job", JobSchema);
module.exports = {
  Job,
};
