const { z, any } = require("zod");

// export const postTODO = z.object({
//     body: {
//         _id: z.string({
//             required_error: "valid TODOID value is required",
//         }),
//         description: z.string({
//             required_error: "valid TODO description value is required",
//         }),
//         kind: z.string({
//             required_error: "valid TODO kind value is required",
//         }),
//         isChoosen: z.boolean({
//             required_error: "valid isChoosen value is required",
//         }),
//         isDeleted: z.boolean({
//             required_error: "valid isDeleted value is required",
//         }),
//         location: z.array({
//             required_error: "valid location value is required",
//         }),
//         isPinBtnDisable: z.boolean({
//             required_error: "valid isPinBtnDisable value is required",
//         }),
//     }
// })

exports.postTODO = z.object({
    body: z.record(
        _id = z.string({
            required_error: "valid TODOID value is required",
        }),
        description = z.string({
            required_error: "valid TODO description value is required",
        }),
        kind = z.string({
            required_error: "valid TODO kind value is required",
        }),
        isChoosen = z.boolean({
            required_error: "valid isChoosen value is required",
        }),
        isDeleted = z.boolean({
            required_error: "valid isDeleted value is required",
        }),
        location = z.array({
            required_error: "valid location value is required",
        }),
        // location = any,
        isPinBtnDisable = z.boolean({
            required_error: "valid isPinBtnDisable value is required",
        }),
    )
})