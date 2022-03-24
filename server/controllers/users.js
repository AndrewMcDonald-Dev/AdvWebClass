const express = require("express");
const app = express.Router();
const userModel = require("../models/user");
const StatusCodes = require("http-status-codes");

app.get("/", (req, res) => {
    res.send(userModel.list);
})
    .get("/:id", (req, res) => {
        const user = userModel.get(req.params.id);
        res.send(user);
    })
    .post("/", (req, res) => {
        const user = userModel.create(req.body);
        res.status(StatusCodes.CREATED).send(user);
    });

module.exports = app;
