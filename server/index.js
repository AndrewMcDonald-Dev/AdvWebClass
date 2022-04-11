require("dotenv").config();
const express = require("express");
const { StatusCodes } = require("http-status-codes");
const usersController = require("./controllers/users");
const postsController = require("./controllers/posts");
const { requireAuth } = require("./models/auth");
const userModel = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;
app.use("/", express.static(__dirname + "/public/"))
    .use(express.json())
    .use((req, res, next) => {
        const auth = req.headers.authorization;
        if (auth) {
            const token = auth.split(" ")[1];
            userModel
                .fromToken(token)
                .then((user) => {
                    req.user = user;
                    next();
                })
                .catch(next);
        } else next();
    })
    .get("/api", (req, res) => {
        res.send("Hello world!");
    })
    .use("/api/users", usersController)
    .use("/api/posts/", requireAuth, postsController)
    .use((err, req, res, next) => {
        console.error(err);
        switch (err.code) {
            case 11000:
                res.status(StatusCodes.CONFLICT).send({
                    success: false,
                    errors: [
                        {
                            message: "Handle already in use",
                        },
                    ],
                });
                break;
            default:
                res.status(
                    err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
                ).send({
                    error: err.message ?? "Internal Server Error",
                });
        }
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
