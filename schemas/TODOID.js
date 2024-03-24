import { z } from "zod";

export const TODOIDReqestSchema = z.object({
    params: z.string({
        required_error: "valid TODOID is required",
    })
})