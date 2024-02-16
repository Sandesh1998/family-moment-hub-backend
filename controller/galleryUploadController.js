const Gallery = require("../model/gallerySchema");

exports.uploadPhotos = async (req, res) => {
  try {
    const familyKey = req.headers["family-key"];

    if (!familyKey) {
      res.status(401).json({ error: "Family key is required." });
      return;
    }
    if (!req.files || req.files.length === 0) {
      res.status(400).send("No files were uploaded.");
      return;
    }
    let images = [];
    for (let i = 0; i < req.files.length; i++) {
      let image = `http://${req.headers.host}/${req.files[i].path}`;
      images.push({
        filename: req.files[i].filename,
        path: image,
      });
    }
    images = images.map((image) => {
      return {
        filename: image.filename,
        path: image.path.split("/public").join(""),
      };
    });

    const gallery = new Gallery({
      images,
      familyKey,
    });

    await gallery.save();
    res.status(201).json({ message: "Images uploaded successfully.", gallery });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const familyKey = req.headers["family-key"];

    if (!familyKey) {
      res.status(401).json({ error: "Family key is required." });
      return;
    }
    const gallery = await Gallery.find({ familyKey: familyKey });
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
