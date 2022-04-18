const express = require("express");
const routes = express.Router();

const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const ContactCtrl = require("../controllers/ContactController");
const UserCtrl = require("../controllers/UserController");
const SignupCtrl = require("../controllers/SignupController");


routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/contact", ContactCtrl);
routes.use("/user", UserCtrl);
routes.use("/signup", SignupCtrl);

module.exports = routes;

