const routes = require("express").Router();
// const routes = express.Router();
const HomeCtrl = require("../controllers/HomeController");
const SignupCtrl = require("../controllers/SignupController");

routes.use("/", HomeCtrl);
routes.use("/signup", SignupCtrl);

module.exports = routes;
