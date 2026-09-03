const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Node Application";

app.use(express.static("public"));

app.get("/api/info", (req, res) => {
    res.json({
        application: APP_NAME,
        environment: process.env.NODE_ENV,
        port: PORT,
        message: "Node.js application is running successfully!"
    });
});

app.listen(PORT, () => {
    console.log("=================================");
    console.log(`${APP_NAME}`);
    console.log("=================================");
    console.log(`Server running on port ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
});
