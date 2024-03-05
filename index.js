const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();
require("./config/dbConfig");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? ["http://localhost:3000", "https://family-moment-hub.onrender.com"]
      : "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(helmet());

//
const routers = require("./main.route");
app.use("/familyMoment/api", routers);

const port = process.env.Port || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Node server started at port ${port}`));

module.exports = { app };
