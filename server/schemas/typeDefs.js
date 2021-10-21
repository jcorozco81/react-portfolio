const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Message {
    _id: ID!
    name: String
    email: String
    body: String
}

type Query {
    messages: [Message]
  }

  type Mutation {
    addMessage(name: String, email: String, body: String ): Message

  }



`;

module.exports = typeDefs;