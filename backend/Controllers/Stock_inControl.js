const stockService = require('../Services/StockinService');

const addStock = async (req, res) => {
    try {
        const result = await stockService.addStock(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




const getAllStocks = async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query;
        const stockData = await stockService.getAllStocks({ page, limit });
        res.status(200).json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
    }
};


    const deleteStock= async (req, res) => {
    try {
        const { id } = req.params;
        await stockService.deleteStock(id);
        res.status(200).json({ message: 'Stock deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting stock', error });
    }
};

const updateStock = async (req, res) => {
    try {
        const result = await stockService.updateStock(req.params.id, req.body);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Stock not found' });
        } else {

            res.status(200).json({ message: 'Stock updated successfully' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAllStockCount = async (req, res) => {
    try {
        const count = await stockService.getstock_in_Count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user count', error });
    }
  };

  
  const searchStock = async (req, res) => {
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
    addStock,
    getAllStocks,
    deleteStock,
    updateStock,
    getAllStockCount,
    searchStock
};
