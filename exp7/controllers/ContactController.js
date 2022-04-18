const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("contact/index");
})

routes.get("/local", (req, res)=>{
    res.render("contact/local")
})

routes.get("/global", (req, res)=>{
    res.render("contact/global")
})

module.exports = routes;