const routes = require("express").Router();

const galleryRouter = require("./routes/galleryRoutes");

routes.use("/gallery", galleryRouter);

module.exports = routes;
