const express = require('express');
const router = express.Router();
const stockController = require('../Controllers/Stock_inControl');

router.post('/stock_in', stockController.addStock);
router.get('/stock_in', stockController.getAllStocks);
router.delete('/stock_in/:id', stockController.deleteStock);
router.put('/stock_in/:id', stockController.updateStock);

router.get('/stock_in/count', stockController.getAllStockCount);
router.get('/stock_in/search', stockController.searchStock);


module.exports = router;
