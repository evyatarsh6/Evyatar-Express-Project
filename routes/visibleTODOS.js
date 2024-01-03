import { Router } from "express";

const router = Router()

router.get('/shownTODOS', (req, res) => {

})




// switch(filterKind){
//     case "normal":
//         return Object.values(TODOList).filter( TODO  => !TODO.isDeleted)
//     case "delete":
//         return Object.values(TODOList).filter( TODO  => TODO.isDeleted)
//     case "choosen":
//         return Object.values(TODOList).filter( TODO  => (TODO.isChoosen && !TODO.isDeleted))
//     default:
//         return []
// }