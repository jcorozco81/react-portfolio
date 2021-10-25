const db = require('../config/connection');
const { Message } = require('../models');

const commentData = require('./commentData.json');

db.once('open', async () => {
  await Message.deleteMany({});

  const comments = await Message.create(commentData);

  console.log('Comments seeded!');
  process.exit(0);
});
