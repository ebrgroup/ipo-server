const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const tradeMarkController = require("../controllers/trademarkController.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadPath = path.join(__dirname, '../../ipo-client/src/assets/uploads/');
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/trackIp/trademark/:id', tradeMarkController.trackTrademark);
router.get('/searchIp/trademark/:name', tradeMarkController.searchTrademark);
router.get('/dashboard/user/countIp/:id', tradeMarkController.userTrademark);

router.post("/trademark", 
    upload.fields([{ name: 'licenseFile', maxCount: 1 }, { name: 'logoFile', maxCount: 1 }]), 
    tradeMarkController.insertTradeMark
);

module.exports = router;