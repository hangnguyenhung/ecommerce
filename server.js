const app = require("./src/app");
const {
    app: { port },
} = require("./src/configs/config.mongodb");

const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// process.on("SIGINT", () => {
//     console.log("Stopping server");
//     server.close();
//     process.exit();
// });
