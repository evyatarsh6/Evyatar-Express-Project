
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')

const getAllTODOSHandler = async (req, res) => {

    try {
        const query = {}
        const projection = {}

        const result = await generateDBOperation(
            'find',
            'TODOS',
            query,
            projection
        )

        if (!result) {
            return createError(405, 'TODOS not found')
        }
        res.send(result).status(200);


    } catch (error) {
        return createError(500, error.message)
    }

}


module.exports = { getAllTODOSHandler };
