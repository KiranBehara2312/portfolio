const mongoose = require("mongoose");

// Create the user schema
const stateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    shortName: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: String,
    },
    updatedBy: {
      type: String,
    },
  },
  { timestamps: true }
);

const States = mongoose.model("States", stateSchema);

module.exports = States;
