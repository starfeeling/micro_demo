const micro = require('micro')
const sleep = require('then-sleep')
const {send} = require('micro')

module.exports = async(req, res) => {
    try {
        const data = {
            message: 'Custom message'
        }
        send(res, 200, data)
        console.log('123');

    } catch (err) {
        console.log(err.stack)
        const data = {
            error: 'Custom error message'
        }
        send(res, statusCode, data)
    }
}
