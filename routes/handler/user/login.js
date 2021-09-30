const bcrypt = require('bcrypt')
const { User } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()
const jwt = require('jsonwebtoken')
const {
    JWT_SECRET,
    JWT_ACCESS_TOKEN_EXPIRED
} = process.env

module.exports = async (req, res) => {
    const schema = {
        email: 'email|empty:false',
        password: 'string|min:6'
    }

    const validate = v.validate(req.body, schema)
    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }

    const invalidPassword = await bcrypt.compare(req.body.password, user.password)
    if(!invalidPassword){
        return res.status(404).json({
            status: 'error',
            message: 'user not foundd'
        })
    }

    const data = {
        name: user.name,
        email: user.email,
        address: user.address
    }

    //token
    const token = jwt.sign( { data }, JWT_SECRET, { expiresIn: JWT_ACCESS_TOKEN_EXPIRED } )



    return res.json({
        status: 'success',
        data: {
            name: user.name,
            email: user.email,
            address: user.address,
            token: token
        }
    })
}