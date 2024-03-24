const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')


const patchFieldWantedTODOHandler = async (req, res) => {
    try {
        const { _id, wantedField, wantedFieldUpdateVal } = req.body

        const WantedDocuQuery = {
            "_id": _id
        }
        const operation = { $set: { [wantedField]: wantedFieldUpdateVal } }

        const result = await generateDBOperation(
            'updateOne',
            'TODOS',
            WantedDocuQuery,
            operation
        )

        if (!result) {
            return createError(405, `update wanted TODO with ID: ${_id} failed`)
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }

}

module.exports = { patchFieldWantedTODOHandler };