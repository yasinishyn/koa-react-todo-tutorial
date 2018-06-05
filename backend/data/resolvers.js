const resolvers = {
  Query: {
    todo(root, args) {
      return {
        id: '5b1558f5b39f2c737a5e8464',
        description: 'Todo 1',
        done: false,
        createdAt: "2018-06-04T15:21:25.516Z",
        updatedAt: "2018-06-04T15:21:25.516Z"
      };
    },
    todos() {
      return [{
        id: '5b1558f5b39f2c737a5e8464',
        description: 'Todo 1',
        done: false,
        createdAt: "2018-06-04T15:21:25.516Z",
        updatedAt: "2018-06-04T15:21:25.516Z"
      }];
    }
  },
};

export default resolvers;