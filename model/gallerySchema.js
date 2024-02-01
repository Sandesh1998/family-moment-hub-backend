const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  images: [
    {
      filename: String,
      path: String,
    },
  ],
  familyKey: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
