const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')


const getTodoByIDHandler = async (req, res) => {
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

        console.log(result)
        
        if (!result) {
            return createError(405, 'wanted TODO not found')
        }
        res.send(result).status(200);


    } catch (error) {
        return createError(500, error.message)
    }


}


module.exports = { getTodoByIDHandler };