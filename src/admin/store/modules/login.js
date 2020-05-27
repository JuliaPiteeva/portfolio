export default {
  namespaced: true,
  state: {
    user: {},
  },
  actions: {
    async toLogin({ commit }, user) {
      try {
        const response = await this.$axios.post("/login", user);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
