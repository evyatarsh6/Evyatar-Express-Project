export const postTODOHandler = async (req, res) => {
    try {
        const result = await generateDBOperation(
            'insertOne',
            'TODOS',
            req.body
        )

        if (!result) {
            return createError(404, 'post new TODO failed')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }

}