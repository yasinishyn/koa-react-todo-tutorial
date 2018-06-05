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
  Mutation: {
    addTodo(root, args) {
      const newTodo = new Todo(args)
      return newTodo.save()
    }
  }
};

export default resolvers;