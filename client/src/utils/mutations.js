import { gql } from '@apollo/client';

// Add message mutation
export const ADD_MESSAGE = gql`
mutation addMessage ($fullname: String, $email: String, $body: String) {
    addMessage(fullname: $fullname, email: $email, body: $body) {
      fullname
      email
      body
    },   
  }
`;
