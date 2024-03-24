import { any, z } from "zod";

export const patchDocumentField = z.object({
    body: z.record(
        z.string({
            required_error: "valid document name is required",
        }),
        any)
})


