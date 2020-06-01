import $axios from "../../requests";

export default {
  namespaced: true,
  state: {
    reviews: [],
  },
  mutations: {
    SET_REVIEW(state, reviews) {
      state.reviews = reviews;
    },
    ADD_REVIEW(state, newReviews) {
      state.reviews.push(newReviews);
    },
    REMOVE_REVIEW(state, revToRemove) {
      state.reviews = state.reviews.filter((rev) => rev.id != revToRemove.id);
    },
  },
  actions: {
    async fetchReviews({ commit }) {
      try {
        const { data } = await this.$axios.get("/reviews/319");
        commit("SET_REVIEW", data);
      } catch (error) {
        console.log(error);
      }
    },
    async addReview({ commit }, revsData) {
      var formData = new FormData();
      formData.append("photo", revsData.photo);
      formData.append("author", revsData.name);
      formData.append("occ", revsData.position);
      formData.append("text", revsData.text);

      try {
        const { data } = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async removeRev({ commit }, revToRemove) {
      try {
        const { data } = await this.$axios.delete(
          `/reviews/${revToRemove.id}}`
        );
        commit("reviews/REMOVE_REVIEW", revToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
