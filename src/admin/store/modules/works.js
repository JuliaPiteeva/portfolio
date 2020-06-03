import $axios from "../../requests";
import userID from "../../helpers/userID";

export default {
  namespaced: true,
  state: {
    works: [],
    editMode: false,
    
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
    EDIT_WORK(state, workToEdit) {
      state.works = state.works.map((work) => {
        work.id === workToEdit.id ? workToEdit : work;
      });
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      try {
        const { data } = await this.$axios.get(`/works/319`);
        commit("SET_WORKS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async addWork({ commit }, workData) {
      const formData = new FormData();
      formData.set("title", workData.title);
      formData.set("techs", workData.tags);
      formData.set("photo", workData.photo);
      formData.set("link", workData.link);
      formData.set("description", workData.desc);

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
    async editWork({ commit }, workToEdit) {
      try {
        const { data } = await this.$axios.post(
          `/works/${workToEdit.id}`,
          workToEdit
        );
        commit("EDIT_WORK", data.work);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getEditModeState: (state) => state.editMode,
  },
};
