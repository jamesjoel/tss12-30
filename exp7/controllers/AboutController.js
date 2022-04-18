const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("about/index");
});
routes.get("/info", (req, res)=>{
    res.render("about/info");
});
routes.get("/more", (req, res)=>{
    res.render("about/more");
});

module.exports = routes;