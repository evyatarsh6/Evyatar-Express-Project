import { z } from "zod";

export const collectionNameReqestSchema = z.object({
    params: z.string({
        required_error: "valid collection name is required",
    })
})