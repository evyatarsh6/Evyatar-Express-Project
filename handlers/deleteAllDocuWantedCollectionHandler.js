const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')

const deleteAllDocuWantedCollectionHandler = async (req, res) => {
    try {
        const collectionName = req.params.collectionName

        const result = await generateDBOperation(
            'deleteMany',
            collectionName,
            {}
        )
        console.log(result)
        if (!result) {
            return createError(405, 'wanted collection not found')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }
}

module.exports = { deleteAllDocuWantedCollectionHandler };
