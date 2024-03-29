const express = require("express");
const app = express.Router();
const postModel = require("../models/post");
const { StatusCodes } = require("http-status-codes");

app.get("/", (req, res, next) => {
    postModel
        .getList()
        .then((posts) => res.json({ success: true, errors: [], data: posts }))
        .catch(next);
})
    .get("/:id", (req, res, next) => {
        postModel
            .get(req.params.id)
            .then((post) =>
                res.json({ success: true, errors: [], data: posts })
            )
            .catch(next);
    })
    .get("/wall/:handle", (req, res, next) => {
        postModel
            .getWall(req.params.handle)
            .then((posts) =>
                res.json({ success: true, errors: [], data: posts })
            )
            .catch(next);
    })
    .post("/", (req, res, next) => {
        postModel
            .create(req.body)
            .then((post) =>
                res
                    .status(StatusCodes.CREATED)
                    .json({ success: true, errors: [], data: post })
            )
            .catch(next);
    })
    .delete("/:id", (req, res, next) => {
        postModel
            .remove(req.params.id)
            .then(() =>
                res
                    .status(StatusCodes.OK)
                    .send({ success: true, errors: [], data: post })
            )
            .catch(next);
    })
    .patch("/:id", (req, res, next) => {
        postModel
            .update(req.params.id, req.body)
            .then((post) => res.json({ success: true, errors: [], data: post }))
            .catch(next);
    })
    .post("/seed", (req, res, next) => {
        postModel
            .seed()
            .then((post) =>
                res
                    .status(CREATED_STATUS)
                    .json({ success: true, errors: [], data: post })
            )
            .catch(next);
    });

module.exports = app;
