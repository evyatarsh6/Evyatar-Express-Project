const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')


export const getTodoByIdHandler = async (req, res) => {
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
            return createError(401, 'not found wanted TODO')
        }
        res.send(result).status(200);
        

    } catch (error) {
        return createError(500, error.message)
    }
  

}