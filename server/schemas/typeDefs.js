const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Message {
    _id: ID!
    fullname: String
    email: String
    body: String
    date_sent: String
}

type Query {
    messages: [Message]
  }

  type Mutation {
    addMessage(fullname: String, email: String, body: String ): Message

  }



`;

module.exports = typeDefs;