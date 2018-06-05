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
    addTodo(_, args) {
      const newTodo = new Todo(args)
      return newTodo.save()
    },
    async removeTodo(_, args) {
      const todo = await Todo.findById(args.id);
      return todo.remove()
    },
    async updateTodo(_, args) {
      const todo = await Todo.findById(args.id)
      todo.done = args.done || todo.done
      todo.description = args.description || todo.description
      return todo.save()
    },
  }
};

export default resolvers;