const express = require("express");
const { generateEthereumWallet } = require("../controller/wallet");
const router = new express.Router();

router.post("/wallet-api", generateEthereumWallet);

module.exports = router;
