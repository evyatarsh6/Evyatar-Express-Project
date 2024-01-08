const createDB = require('./createDB');

const getDB = async () => {
  const db = await createDB();
}

getDB();
