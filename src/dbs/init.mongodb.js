const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");
const config = require("../configs/config.mongodb");

console.log(config);
const connectString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
console.log(connectString);

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = "mongodb") {
        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true });
        }

        mongoose
            .connect(connectString)
            .then(() => {
                console.log("MongoDB connected", countConnect());
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
