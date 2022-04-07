const express = require("express");
const app = express.Router();
const postModel = require("../models/post");
const { StatusCodes } = require("http-status-codes");

app.get("/", (req, res) => {
    res.send(postModel.list);
})
    .get("/:id", (req, res) => {
        const post = postModel.get(req.params.id);
        res.send(post);
    })
    .post("/", (req, res) => {
        const post = postModel.create(req.body);
        res.status(StatusCodes.CREATED).send(post);
    })
    .delete("/:id", (req, res) => {
        const post = postModel.remove(req.params.id);
        res.send({ success: true, errors: [], data: post });
    })
    .patch("/:id", (req, res) => {
        const post = postModel.update(req.params.id, req.body);
        res.send({ success: true, errors: [], data: post });
    });

module.exports = app;
