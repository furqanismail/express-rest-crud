
const { Product } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        code: 'string|empty:false',
        price: 'string|empty:false',
        status: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const product = await Product.findOne({
        where: { code: req.body.code }
    });

    if(product){
        return res.status(409).json({
            status: 'error',
            message: 'code already existed'
        })
    }

    const data = {
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        status: req.body.status
    };

    const createProduct = await Product.create(data);

    return res.json({
        status: 'success',
        data: {
            id : createProduct.id
        } 
    })
}