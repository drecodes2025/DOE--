const express = require('express');
const { createDonation } = require('../controllers/donationController');
const router = express.Router();

router.post('/donate', createDonation);

module.exports = router;
