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

    const data = {
        name: req.body.name,
        description: req.body.description
    };

    const createTodo = await Todo.create(data);

    return res.json({
        status: 'success',
        data: {
            id: createTodo.id
        }
    })

}
