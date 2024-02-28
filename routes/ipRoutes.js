const express = require('express');
const router = express.Router();
const IPController = require('../controllers/IPController')

router.get('/searchIp/trademark', IPController.searchTrademarkByName);
router.get('/searchIp/copyright', IPController.searchCopyrightByName);
router.get('/searchIp/design', IPController.searchDesignByName);
router.get('/searchIp/patent', IPController.searchPatentByName);


module.exports = router;