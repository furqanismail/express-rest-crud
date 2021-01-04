const { Product } = require('../../../models');

module.exports = async (req, res) => {
    

    const product = await Product.findAll({
        attributes: ['code', 'name', 'price', 'status']
    });

    return res.json({
        status: 'success',
        data: product
    })
}