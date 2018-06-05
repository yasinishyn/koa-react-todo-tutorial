const Todo = require('../models/todo')

const resolvers = {
  Query: {
    todo(_, args) {
      return Todo.findById(args.id);
    },
    todos() {
      return Todo.find({});
    }
  },
};

export default resolvers;