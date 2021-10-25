const { Message } = require(`../models`);

const resolvers = {
  Query: {
    messages: async () => {
      return await Message.find({});
    },
  },

    Mutation: {
      addMessage: async (parent, { fullname, email, body }) => {
        const message = await Message.create({ fullname, email, body });
        console.log(message);
        return message;
      },
    },
  
};
module.exports = resolvers;
