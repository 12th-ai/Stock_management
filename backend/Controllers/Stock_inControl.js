// // controllers/stockController.js
// const stockService = require('../Services/StockinService');

// const createStock = async (req, res) => {
//     try {
//         const newStock = await stockService.addStock(req.body);
//         res.status(201).json(newStock);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// const modifyStock = async (req, res) => {
//     const stockId = req.params.stock_id;
//     const stockData = req.body;

//     console.log('Received stock data for update:', stockData);

//     try {
//         const result = await stockService.updateStock(stockId, stockData);

//         if (result.affectedRows === 0) {
//             return res.status(404).json({ message: 'Stock not found' });
//         }

//         res.json({ message: 'Stock updated successfully' });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const listAllStocks = async (req, res) => {
//     try {
//         const { page = 1, limit = 5 } = req.query;

//         const stockData = await stockService.getAllStocks({ page, limit });
//         res.status(200).json(stockData);
//     } catch (error) {
//         console.error('Error fetching stock data:', error);
//         res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
//     }
// };

// const getStockById = async (req, res) => {
//     const stockId = parseInt(req.params.stock_id, 10);

//     try {
//         console.log(`Received ID for retrieval: ${stockId}`);

//         const stockData = await stockService.getStockById(stockId);
//         res.status(200).json(stockData);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
//     }
// };

// const removeStock = async (req, res) => {
//     const stockId = parseInt(req.params.stock_id, 10);

//     try {
//         console.log(`Received ID for deletion: ${stockId}`);

//         await stockService.deleteStock(stockId);
//         res.status(200).json({ message: 'Stock deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting stock', error });
//     }
// };

// const getStockCount = async (req, res) => {
//     try {
//         const count = await stockService.getStockCount();
//         res.status(200).json({ count });
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving stock count', error });
//     }
// };

// const searchStocks = async (req, res) => {
//     try {
//         const { from, to, q } = req.query;
//         const stockData = await stockService.searchStock({ from, to, q });
//         res.status(200).json(stockData);
//     } catch (error) {
//         console.error('Error searching stock data:', error);
//         res.status(500).json({ message: 'Error searching stock', error });
//     }
// };

// module.exports = {
//     createStock,
//     modifyStock,
//     listAllStocks,
//     getStockById,
//     removeStock,
//     getStockCount,
//     searchStocks
// };
// controllers/stockController.js
const stockService = require('../services/stockService');

const createStock = async (req, res) => {
    try {
        const newStock = await stockService.addStock(req.body);
        res.status(201).json(newStock);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const modifyStock = async (req, res) => {
    const stockId = req.params.stock_id;
    const stockData = req.body;

    console.log('Received stock data for update:', stockData);

    try {
        const result = await stockService.updateStock(stockId, stockData);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stock not found' });
        }

        res.json({ message: 'Stock updated successfully' });
    } catch (error) {
        console.error('Error updating stock:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const listAllStocks = async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query;

        const stockData = await stockService.getAllStocks({ page, limit });
        res.status(200).json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
    }
};

const getStockById = async (req, res) => {
    const stockId = parseInt(req.params.stock_id, 10);

    try {
        console.log(`Received ID for retrieval: ${stockId}`);

        const stockData = await stockService.getStockById(stockId);
        res.status(200).json(stockData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
    }
};

const removeStock = async (req, res) => {
    const stockId = parseInt(req.params.stock_id, 10);

    try {
        console.log(`Received ID for deletion: ${stockId}`);

        await stockService.deleteStock(stockId);
        res.status(200).json({ message: 'Stock deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting stock', error });
    }
};

const getStockCount = async (req, res) => {
    try {
        const count = await stockService.getStockCount();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stock count', error });
    }
};

const searchStocks = async (req, res) => {
    try {
        const { from, to, q } = req.query;
        const stockData = await stockService.searchStock({ from, to, q });
        res.status(200).json(stockData);
    } catch (error) {
        console.error('Error searching stock data:', error);
        res.status(500).json({ message: 'Error searching stock', error });
    }
};

module.exports = {
    createStock,
    modifyStock,
    listAllStocks,
    getStockById,
    removeStock,
    getStockCount,
    searchStocks
};
