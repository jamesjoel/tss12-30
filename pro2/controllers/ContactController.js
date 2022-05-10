const routes = require("express").Router();


routes.get("/", (req, res)=>{
    res.render("contact/index");
})

module.exports = routes;