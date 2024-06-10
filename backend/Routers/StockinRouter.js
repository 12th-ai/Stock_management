// routes/stockRouter.js
const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.post('/stock_in', stockController.createStock);
router.put('/stock_in/:stock_id', stockController.modifyStock);
router.get('/stock_in', stockController.listAllStocks);
router.get('/stock_in/count', stockController.getStockCount);
router.get('/stock_in/search', stockController.searchStocks);
router.get('/stock_in/:stock_id', stockController.getStockById);
router.delete('/stock_in/:stock_id', stockController.removeStock);

module.exports = router;
