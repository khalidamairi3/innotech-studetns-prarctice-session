<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <jokeButton />
    <div id="choices">
      <button @click="selection(1)"> loud </button>
      <button @click="selection(2)"> snake </button>
      <button @click="selection(3)" > normal </button>
    </div>
    <loudJoke v-if=" choice == 1" />
    <normalJoke v-if=" choice == 3" />
    <snakeJoke v-if=" choice == 2" />

    
  </div>
</template>

<script>
import jokeButton from "./components/jokebutton";
import snakeJoke from "./components/snakejoke";
import normalJoke from "./components/norrmaljoke";
import loudJoke from "./components/loudjoke";

export default {
  name: "App",
  components: {
    loudJoke,
    normalJoke,
    snakeJoke,
    jokeButton



  },
  data : function(){
    return {
      choice : 3
    }
  },
  methods: {
    selection(choice) {
      this.choice = choice
      
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
