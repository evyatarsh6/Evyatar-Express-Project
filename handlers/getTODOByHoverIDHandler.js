const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

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
            res.send('not found wanted TODO').status(401);
        }
        res.send(result).status(200);
        

    } catch (error) {
        res.send(error.message).status(500);
    }
  

}