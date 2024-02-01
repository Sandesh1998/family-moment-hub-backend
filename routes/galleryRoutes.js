const express = require("express");
const upload = require("../helper/multer");

const {
  uploadPhotos,
  getPhotos,
} = require("../controller/galleryUploadController");

const galleryRouter = express.Router();

// Adjust the number as needed
galleryRouter.post("/upload", upload.array("images", 20), uploadPhotos);
galleryRouter.get("/photos", getPhotos);

module.exports = galleryRouter;
