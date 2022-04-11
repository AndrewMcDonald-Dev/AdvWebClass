const express = require("express");
const app = express.Router();

const { requireAuth } = require("../models/auth");
const userModel = require("../models/user");
const { StatusCodes } = require("http-status-codes");

app.get("/", requireAuth, (req, res, next) => {
    userModel
        .getList()
        .then((users) => {
            res.status(StatusCodes.OK).send(users);
        })
        .catch(next);
})
    .get("/handle/:handle", (req, res, next) => {
        userModel
            .getByHandle(req.params.handle)
            .then((user) => {
                res.status(StatusCodes.OK).send(user);
            })
            .catch(next);
    })
    .get("/:id", (req, res, next) => {
        userModel
            .get(req.params.id)
            .then((user) => {
                res.status(StatusCodes.OK).send(user);
            })
            .catch(next);
    })
    .post("/", (req, res, next) => {
        userModel
            .create(req.body)
            .then((user) => {
                res.status(StatusCodes.CREATED).send(user);
            })
            .catch(next);
    })
    .delete("/:id", requireAuth, (req, res, next) => {
        userModel
            .remove(req.params.id)
            .then((user) => {
                res.status(StatusCodes.OK).send({
                    success: true,
                    errors: [],
                    data: user,
                });
            })
            .catch(next);
    })
    .patch("/:id", (req, res, next) => {
        userModel
            .update(req.params.id, req.body)
            .then((user) => {
                res.send({ success: true, errors: [], data: user });
            })
            .catch(next);
    })
    .post("/login", (req, res, next) => {
        userModel
            .login(req.body.email, req.body.password)
            .then((user) => {
                res.send(user);
            })
            .catch(next);
    })
    .post("/seed", (req, res, next) => {
        userModel
            .seed()
            .then((user) => {
                res.send({ succes: true, erros: [], data: user.insertedIds });
            })
            .catch(next);
    });

module.exports = app;
