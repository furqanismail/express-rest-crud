const { Todo } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator;

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        description: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const id = req.params.id;
    const todos = await Todo.findByPk(id);
    if(!todos){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        })
    }

    const data = {
        name: req.body.name,
        description: req.body.description
    };

    await todos.update(data);

    return res.json({
        status: 'success',
        data: {
            id: todos.id,
            name: todos.name,
            description: todos.description
        }
    })

}
