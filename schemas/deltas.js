const { z, any } = require("zod");

exports.getDeltasSchema = z.object({
    params: z.object({
        currTime: z.string({
            required_error: "valid currTime is required",
        }),
    }),
})


