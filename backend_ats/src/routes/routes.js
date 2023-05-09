const express = require("express");
const router = express.Router();
const Controller = require('../controller/Controller')

router.post("/data",Controller.data)

module.exports = router ;