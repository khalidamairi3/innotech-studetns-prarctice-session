
var pokemons = ["pokemon_1","pokemon_2","pokemon_3"];

function game(pokemon_name){

    Cookies.set("user_pokemon",pokemon_name);
    var comp_pokemon = pokemons[Math.floor(Math.random()*3)];
    Cookies.set("com_pokemon",comp_pokemon);
    Cookies.set("user_currentHealth","100");
    Cookies.set("computer_currentHealth","100");
    Cookies.set("user_maximum","100");
    Cookies.set("comp_maximum","100");

    window.open("battle.html");

}