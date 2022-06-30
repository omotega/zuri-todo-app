const mongoose = require("mongoose");

const todoschema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please fill in the title field"],
    },
    description: {
      type: String,
      required: [true, "please fill in the description field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo",todoschema);
