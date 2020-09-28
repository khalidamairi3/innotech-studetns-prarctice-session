import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke : "",
  },
  mutations: {
    updateJoke : function(state,joke){
      state.joke = joke;
    }
  },
  actions: {
    newJoke : function (context) {
      
      axios.request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "get"
        })
        .then(response => {
          context.commit("updateJoke", response.data.joke);
        })
        .catch(error => {
          console.log(error);
        });
    }
 

  },

  getters: {
    snake : function(state){

      return state.joke.split(" ").join("_");

    },
    loud : function(state){
      return state.joke.toUpperCase();
    }
  },
  modules: {}
});
