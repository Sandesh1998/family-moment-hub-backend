const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const sanitizedFileName = file.originalname.replace(/\s/g, "-");
    cb(null, uniqueSuffix + "-" + sanitizedFileName);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
