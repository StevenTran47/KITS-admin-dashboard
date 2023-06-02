export const users = {
  state: {
    listUser: [],
    count: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListUser(state, listUser) {
      return {
          ...state,
          listUser,
        };
    },
    setCount(state, count) {
      return {
          ...state,
          count,
        };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async fetchUsers() {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());
      this.setListUser(data);
    }
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice(state => state.count);
    },
}),
};