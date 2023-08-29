const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller');

const app = express();

//Body Parser
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("Router is loaded");

router.get('/',homeController.home);

router.post('/add_task',urlencodedParser,homeController.add);

module.exports = router;