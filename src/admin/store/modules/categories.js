import $axios from "../../requests";

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, newCategory) {
      state.categories.push(newCategory);
    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map((category) => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL(state, skillToRemove) {
      const removeSkillInCat = (category) => {
        category.skills = category.skills.filter(
          (skill) => skill.id != skillToRemove.id
        );
      };

      const findCategory = (category) => {
        if (category.id === skillToRemove.category) {
          removeSkillInCat(category);
        }
        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL(state, skillToEdit) {
      const editSkillInCat = (category) => {
        category.skills = category.skills.map((skill) =>
          skill.id === skillToEdit.id ? skillToEdit : skill
        );
        return category;
      };

      const findCategory = (category) => {
        if (category.id === skillToEdit.category) {
          editSkillInCat(category);
        }
        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
    EDIT_CATEGORY(state, categoryToEdit) {
      state.categories = state.categories.map((category) => {
        category.id === categoryToEdit.id ? categoryToEdit : category;
        return category;
      });
    },
    REMOVE_CATEGORY(state, categoryToRemove) {
      state.categories = state.categories.filter(
        (category) => category.id != categoryToRemove.id
      );
    },
  },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchcategories({ commit }) {
      try {
        const { data } = await this.$axios.get("/categories/319");
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    },
    async editCategory({ commit }, editedCateg) {
      try {
        const title = `${editedCateg.category}`;
        const { data } = await this.$axios.post(
          `categories/${editedCateg.id}`,
          {
            title,
          }
        );
        commit("categories/EDIT_CATEGORY", data.category, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
    async removeCategory({ commit }, categoryToRemove) {
      try {
        const { data } = await this.$axios.delete(
          `/categories/${categoryToRemove.id}`
        );
        commit("categories/REMOVE_CATEGORY", categoryToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
