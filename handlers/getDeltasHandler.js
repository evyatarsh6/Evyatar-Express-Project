const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
var createError = require('http-errors')

let prevTime = '2024-01-25T12:29:11.822+00:00'

const getDeltasHandler = async (req, res) => {
    try {
        let newTime = req.params.currTime
        const query = {
            "timeStanp": { $lt: newTime },
            $and:
                [{ "timeStanp": { $gt: prevTime } }]
        }
        const result = await generateDBOperation(
            'find',
            'changeLog',
            query,
        )
        prevTime = newTime

        if (!result) {
            return createError(405, 'get Deltas failed')
        }
        res.send(result).status(200);

    } catch (error) {
        return createError(500, error.message)
    }
}

module.exports = { getDeltasHandler };
