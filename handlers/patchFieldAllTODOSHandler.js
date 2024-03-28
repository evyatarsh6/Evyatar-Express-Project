const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')

const patchFieldAllTODOSHandler = async (req, res) => {
    try {
        const { wantedField, wantedFieldUpdateVal } = req.body
        const operation = { $set: { [wantedField]: wantedFieldUpdateVal } }
        const WantedDocuQuery = {}

        const result = await generateDBOperation(
            'updateMany',
            'TODOS',
            WantedDocuQuery,
            operation
        )
        console.log(result)
        
        if (!result) {
            return createError(405, 'update TODOS field failed')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }

}

module.exports = { patchFieldAllTODOSHandler };