const { Todo } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator;

module.exports = async (req, res) => {

    const data = await Todo.findAll();

    return res.json({
        status: 'success',
        data: data
    })

}
