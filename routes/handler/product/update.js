
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

    const code = req.body.code;

    const id = req.params.id;
    const cekid = await Product.findByPk(id);
    if(!cekid){
        return res.status(400).json({
            status: 'error',
            message: 'product not found!!'
        })
    }

    if(code) {
        const product = await Product.findOne({
            where: { code: req.body.code }
        });
        if(product && code !== cekid.code){
            return res.status(409).json({
                status: 'error',
                message: 'code already existed'
            })
        }
    }

    const {
        name,
        price,
        status
    } = req.body;

    const updateProduct = await cekid.update({
        code,
        name, price,
        status
    });

    return res.json({
        status: 'success',
        data: {
            id : updateProduct.id,
            name,
            price, 
            status
        } 
    })
}