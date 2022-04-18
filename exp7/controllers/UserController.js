const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("user/index");
})
routes.get("/setting", (req, res)=>{
    res.render("user/setting");
})
routes.get("/setting/password", (req, res)=>{
    res.render("user/password");
})



module.exports = routes;