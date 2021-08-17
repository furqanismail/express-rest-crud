const { Todo } = require('../../../models');

module.exports = async (req, res) => {

    const data = await Todo.findAll();

    return res.json({
        status: 'success',
        data: data
    })

}
