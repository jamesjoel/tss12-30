const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("signup/index");
})

routes.post("/save", (req, res)=>{
    console.log(req.body);
})

module.exports = routes;