const express = require("express");
require("dotenv").config();
const compression = require("compression");
const { default: helmet } = require("helmet");
const app = express();

const morgan = require("morgan");

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload();

// init routes
app.get("/", (req, res, next) => {
    const strCompress = "Hello World";
    return res.status(200).json({
        message: "Hello World",
        metadata: strCompress.repeat(100000),
    });
});

// handle errors

module.exports = app;
