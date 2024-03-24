
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

export const deleteAllDocuWantedCollectionHandler = async (req, res) => {
    try {
        const collectionName = req.params.collectionName

        const result = await generateDBOperation(
            'deleteMany',
            collectionName,
            {}
        )

        if (!result) {
            return createError(404, 'wanted collection not found')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }
}
