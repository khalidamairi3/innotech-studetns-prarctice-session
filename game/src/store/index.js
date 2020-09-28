import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSelection : {},
    computerSelection : {},
    wins: 0,
    draws : 0,
    loses :0,
  },
  mutations: {
    updateUser: function(state,userS){
    
      state.userSelection = userS;
      
    },
    updatecomputer : function(state,compS){
      state.computerSelection = compS
    },
    updateResults:function(state,result){
      if(result == 1){
        state.wins++
      }
      else if( result == 0){
        state.draws++;
      }
      else if(result == -1){
        state.loses++;
      }
    }
  },
  actions: {},
  modules: {}
});
