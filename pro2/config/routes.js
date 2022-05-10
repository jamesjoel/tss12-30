const routes = require("express").Router();

// const express = require("express");
// const routes = express.Router();



const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const ContactCtrl = require("../controllers/ContactController");
const StudentCtrl = require("../controllers/StudentController");


routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/contact", ContactCtrl);

routes.use("/student", StudentCtrl);


module.exports = routes;
