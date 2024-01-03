const  { Router} = require('express')

const router = Router();

router.post('/', (req, res) => {

  const filterKind = req.body.filterKind;
  const TODOList = req.body.TODOList;

  switch (filterKind) {
    case 'normal':
      res.send(Object.values(TODOList).filter((TODO) => !TODO.isDeleted));
      break;
    case 'delete':
      res.send(Object.values(TODOList).filter((TODO) => TODO.isDeleted));
      break;
    case 'choosen':
      res.send(
        Object.values(TODOList).filter(
          (TODO) => TODO.isChoosen && !TODO.isDeleted
        )
      );
      break;
    default:
      res.send([]);
  }
});

module.exports = router;
