const express = require("express");
const usersController = require("./controllers/users");

const app = express();
const port = 5000;
app.use("/", express.static(__dirname + "/public/"))
    .use(express.json())
    .get("/api", (req, res) => {
        res.send("Hello world!");
    })
    .use("/api/users", usersController);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
