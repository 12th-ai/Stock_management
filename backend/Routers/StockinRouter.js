const express = require('express');
const router = express.Router();
const stockController = require('../Controllers/Stock_inControl');
const db = require('../Config/db');

router.post('/stock_in', stockController.addStock);
router.get('/stock_in', stockController.getAllStocks);
router.delete('/stock_in/:stock_id', stockController.deleteStock);
// router.put('/stock_in/:stock_id', stockController.updateStock);
router.put('/stock_in/:stock_id', stockController.updateStock);


router.get('/stock_in/count', stockController.getAllStockCount);
router.get('/stock_in/search', stockController.searchStock);
router.get('/stock_in/:stock_id', stockController.getStockByIdController);



module.exports = router;


// router.put('/stock_in/:stock_id', async (req, res) => {
//     const stockId = req.params.stock_id;
//     const stockData = req.body;

//     // Log the request data
//     console.log('Received stock data for update:', stockData);

//     const { product_code, product_name, unit_price, date, amount, owner, suppliers } = stockData;
//     const total_price = unit_price * amount;

//     try {
//         const query = `
//             UPDATE stock_in
//             SET product_code = ?, product_name = ?, unit_price = ?, date = ?, amount = ?, total_price = ?, suppliers = ?
//             WHERE stock_id = ?
//         `;
//         const [result] = await db.query(query, [product_code, product_name, unit_price, date, amount, total_price, suppliers, stockId]);

//         if (result.affectedRows === 0) {
//             return res.status(404).json({ message: 'Stock not found' });
//         }

//         res.json({ message: 'Stock updated successfully' });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });