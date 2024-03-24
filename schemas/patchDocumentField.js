const { z, any } = require("zod");

exports.patchDocumentFieldSchema = z.object({
    body: z.record(
        z.string({
            required_error: "valid document name is required",
        }),
        any)
})


