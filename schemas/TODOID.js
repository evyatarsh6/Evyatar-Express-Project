const { z } = require("zod");

exports.TODOIDReqestSchema = z.object({
    params: z.object({
        TODOID: z.string({
            required_error: "valid TODOID is required",
        }),
    }),
});