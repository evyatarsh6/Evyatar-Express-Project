const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')


export const getTodoByIDHandler = async (req, res) => {
    try {
        const hoverID = req.params.hoverID
        const query = {
            _id: hoverID
        }
        const projection = {}

        const result = await generateDBOperation(
            'find',
            'TODOS',
            query,
            projection
        )

        if (!result) {
            return createError(404, 'wanted TODO not found')
        }
        res.send(result).status(200);


    } catch (error) {
        return createError(500, error.message)
    }


}