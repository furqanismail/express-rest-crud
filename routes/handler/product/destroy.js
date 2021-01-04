
const { Product } = require('../../../models');

module.exports = async (req, res) => {


    const id = req.params.id;
    const cekid = await Product.findByPk(id);
    if(!cekid){
        return res.status(400).json({
            status: 'error',
            message: 'product not found!!'
        })
    }

    const destroy = await cekid.destroy();

    return res.json({
        status: 'success',
        message: 'data berhasil di hapus'
    })
}