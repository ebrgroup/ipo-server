const express = require("express");
const router = express.Router();

const tradeMarkController = require("../controllers/trademarkController.js");

router.post("/trademark", tradeMarkController.insertTradeMark);

module.exports = router;