const bcrypt = require('bcrypt')
const { User } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'string|empty:false',
        password: 'string|empty:false',
        address: 'string|empty:false',
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res.status(400).json({
            status: 'success',
            message: validate
        })
    }

    const user = await User.findOne({
        where: { email: req.body.email }
    })

    if (user) {
        return res.status(409).json({
            status: 'error',
            message: 'email already exist'
        })
    }

    const password = await bcrypt.hash(req.body.password, 10)
    const data = {
        password,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
    }

    const createUser = await User.create(data)

    return res.json({
        status: 'success',
        message: 'data add succesfully'
    })

}