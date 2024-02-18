"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECOND = 5000;

const countConnect = () => {
    const numConnections = mongoose.connections.length;
    return { numConnections };
};

//check overload
const checkOverload = () => {
    setInterval(() => {
        const { numConnections } = countConnect();
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const maxConnections = numCores * 5;
        // console.log(`Active connections: ${numConnections}`);
        // console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnections > maxConnections) {
            console.log(`Overload: ${numConnections} > ${maxConnections}`);
            process.exit(1);
        }
    }, _SECOND);
};

module.exports = { countConnect, checkOverload };
