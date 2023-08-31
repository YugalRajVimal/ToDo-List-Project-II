const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');
const app = express();

//Body Parser
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("Router is loaded");

// Home Page Route 
router.get('/',homeController.home);

// Add Task Route 
router.post('/add_task',urlencodedParser,homeController.add);

// Delete Task Route 
router.get('/delete_task',urlencodedParser,homeController.delete);

module.exports = router;