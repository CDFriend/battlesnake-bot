"use strict";

const express = require('express');
const github = require('github-webhook-handler');

var app = express();

app.get("/", (req, res) => {

    res.send("Hello world!");

});

app.listen(process.env.port || 50000, function() {

    console.log("Server listening on port " + (process.env.port || 50000));

});
