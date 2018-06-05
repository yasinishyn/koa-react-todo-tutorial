import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
type Todo {
  id: Int
  description: String
  done: Boolean
  createdAt: String
  updatedAt: String
}
type Query {
  todo(
    id: Int
  ): Todo
  todos: [Todo]
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;