import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Todo {
  id: String
  description: String
  done: Boolean
  createdAt: String
  updatedAt: String
}
type Query {
  todo(
    id: String
  ): Todo
  todos: [Todo]
}
type Mutation {
  addTodo (
    description: String
  ): Todo
  removeTodo (
    id: String
  ): Todo
  updateTodo (
    id: String
    description: String
    done: Boolean
  ): Todo
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;