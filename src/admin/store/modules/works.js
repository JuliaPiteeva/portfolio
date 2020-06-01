import $axios from "../../requests";

export default {
  namespaced: true,
  state: {
    works: [],
  },
  mutations: {
    SET_WORKS(state, works) {
      state.works = works;
    },
    ADD_WORK(state, newWork) {
      state.works.push(newWork);
    },
    REMOVE_WORK(state, workToRemove) {
      state.works = state.works.filter((work) => work.id != workToRemove.id);
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      try {
        const { data } = await this.$axios.get("/works/319");
        commit("SET_WORKS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async addWork({ commit }, workData) {
      const formData = new FormData();
      formData.append("title", workData.title);
      formData.append("techs", workData.tags);
      formData.append("photo", workData.photo);
      formData.append("link", workData.link);
      formData.append("description", workData.desc);

      try {
        const { data } = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log(error);
      }
    },
    async removeWork({ commit }, workToRemove) {
      try {
        const { data } = await this.$axios.delete(`/works/${workToRemove.id}}`);
        commit("works/REMOVE_WORK", workToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
