const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')

const postTODOHandler = async (req, res) => {
    try {
        const result = await generateDBOperation(
            'insertOne',
            'TODOS',
            req.body
        )

        console.log(result)
        if (!result) {
            return createError(405, 'post new TODO failed')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }

}


module.exports = { postTODOHandler };