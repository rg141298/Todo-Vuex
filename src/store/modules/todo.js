export default {
  state: {
    todos: [],
    addTodo: {
      message: "",
    },
  },
  getters: {
    allTodos: (state) => state.todos,
    getCompletedTodos: (state) => {
      return state.todos.filter((todo) => todo.isCompleted);
    },
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    completeTodo: (state, payload) => {
      state.todos.map((todo) => {
        // eslint-disable-next-line
        if (payload.item.id === todo.id) {
          state.todos.splice(payload.index, 1);
        }
        return todo;
      });
    },
    updateMessage: (state, msg) => {
      state.addTodo.message = msg;
    },
  },
};
