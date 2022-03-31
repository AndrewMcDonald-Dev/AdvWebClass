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
        userModel.create(req.body).then((user) => {
            res.status(StatusCodes.CREATED).send(user);
        });
    })
    .delete("/:id", (req, res) => {
        const user = userModel.remove(req.params.id);
        res.send({ succes: true, erros: [], data: user });
    })
    .patch("/:id", (req, res) => {
        const user = userModel.update(req.params.id, req.body);
        res.send({ succes: true, erros: [], data: user });
    });

module.exports = app;
