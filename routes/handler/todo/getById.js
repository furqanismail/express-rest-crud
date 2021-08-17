const { Todo } = require('../../../models');

module.exports = async (req, res) => {

    const id = req.params.id;
    const data = await Todo.findByPk(id);
    if(!data){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }

    return res.json({
        status: 'success',
        data: data
    })

}
