const express = require("express");
const router = express.Router();
const multer = require("multer");

const tradeMarkController = require("../controllers/trademarkController.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/trademark", upload.fields([{ name: 'licenseFile', maxCount: 1 }]),
 upload.fields([{ name: 'logoImage', maxCount: 1 }]), tradeMarkController.insertTradeMark);

module.exports = router;