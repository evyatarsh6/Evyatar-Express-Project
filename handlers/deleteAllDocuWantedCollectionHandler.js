
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const deleteAllDocuWantedCollectionHandler = async (req, res) => {
    try {
        const collectionName = req.params.collectionName

        const result = await generateDBOperation(
            'deleteMany',
            collectionName,
            {}
        )

        if (!result) {
            return createError(405, 'wanted collection not found')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }
}

module.exports = { deleteAllDocuWantedCollectionHandler };
