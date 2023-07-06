const { default: mongoose } = require("mongoose");

const LocationSchema = mongoose.Schema({
  name: String,
  icon: String,
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const location = mongoose.model("Location", LocationSchema);

module.exports = {
  location,
};
