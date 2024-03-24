const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const designController = require("../controllers/designController.js");

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

router.get('/trackIp/design/:id', designController.trackDesign);
router.get('/searchIp/design/:name', designController.searchDesign);

router.post("/design", 
    upload.fields([{ name: 'licenseFile', maxCount: 1 }, { name: 'attachmentFile', maxCount: 1 }]), 
    designController.insertDesign
);

module.exports = router;