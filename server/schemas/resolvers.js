const { Message } = require(`../models`);

const resolvers = {
  Query: {
    messages: async () => {
      return await Message.find({});
    },
  },

    Mutation: {
      addMessage: async (parent, { name, email, body }) => {
        return await Message.create({ name, email, body });
      },
    },
  
};
module.exports = resolvers;
