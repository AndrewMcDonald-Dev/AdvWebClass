const express = require("express");
const app = express.Router();

const { requireAuth } = require("../models/auth");
const userModel = require("../models/user");
const StatusCodes = require("http-status-codes");
const { reset } = require("nodemon");

app.get("/", requireAuth, (req, res) => {
    res.send(userModel.list);
})
    .get("/:id", (req, res) => {
        const user = userModel.get(req.params.id);
        res.send(user);
    })
    .post("/", requireAuth, (req, res) => {
        userModel
            .create(req.body)
            .then((user) => {
                res.status(StatusCodes.CREATED).send(user);
            })
            .catch(next);
    })
    .delete("/:id", requireAuth, (req, res) => {
        const user = userModel.remove(req.params.id);
        res.send({ succes: true, erros: [], data: user });
    })
    .patch("/:id", (req, res) => {
        const user = userModel.update(req.params.id, req.body);
        res.send({ succes: true, erros: [], data: user });
    })
    .post("login", (req, res) => {
        userModel
            .login(req.params.email, req.params.password)
            .then((user) => {
                res.send(user);
            })
            .catch(next);
    });

module.exports = app;
