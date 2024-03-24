const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')

export const patchFieldAllTODOSHandler =  async (req, res) => {
    try {
        const { wantedField, wantedFieldUpdateVal } = req.body
        const operation = { $set: { [wantedField]: wantedFieldUpdateVal} }
        const WantedDocuQuery = {}
      
        const result = await generateDBOperation(
          'updateMany',
          'TODOS',
          WantedDocuQuery,
          operation
        )
        if (!result) {
            return createError(404, 'update TODOS field failed')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }
  
  }