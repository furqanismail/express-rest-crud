const { Todo } = require('../../../models')
const redis = require('redis')
const client = redis.createClient()

module.exports = async (req, res) => {
    const redisKey = 'todo'
    client.get(redisKey, async (err, data) => {
        if(data){
            return res.json({
                status: 'success',
                isCached: true,
                data: JSON.parse(data)
            })
        }else{
            const data = await Todo.findAll();
            client.set(redisKey, JSON.stringify(data), 'EX', 60)
            return res.json({
                status: 'success',
                data: data
            })
        }

    })




}
