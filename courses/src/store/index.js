import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [{ name: "vue.js", price: 10 }, { name: "vue.js", price: 11 }, { name: "vue.js", price: 12 }, { name: "vue.js", price: 13 }, { name: "vue.js", price: 14 }],
    wishCourses: []
  },
  mutations: {
    towishlist: function (state, addedCousre) {
      state.wishCourses.push(addedCousre);
      for (let i = 0; i < state.courses.length; i++) {
        if (state.courses[i] == addedCousre) {
          state.courses.splice(i, 1);
        }
      }


    },
    fromwishlist: function (state, deletedCourse) {

      state.courses.push(deletedCourse);
      for (let i = 0; i < state.wishCourses.length; i++) {
        if (state.wishCourses[i] == deletedCourse) {
          state.wishCourses.splice(i, 1);
        }
      }

    }
  },
  actions: {},
  modules: {}
});
