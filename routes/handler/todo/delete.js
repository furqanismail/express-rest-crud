const { Todo } = require('../../../models');

module.exports = async (req, res) => {

    const id = req.params.id;
    const todos = await Todo.findByPk(id);
    if(!todos){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }

    const data = await Todo.destroy({
        where: { id: id }
    });

    return res.json({
        status: 'success',
        message: 'data berhasil di hapus'
    })

}
