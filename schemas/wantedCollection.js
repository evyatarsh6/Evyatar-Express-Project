const { z } = require("zod");

exports.collectionNameReqestSchema = z.object({
    params: z.string({
        required_error: "valid collection name is required",
    })
})
