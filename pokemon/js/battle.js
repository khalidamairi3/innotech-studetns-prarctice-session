var pokemon_images={
    pokemon_1:"https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg",
    pokemon_2: "https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest?cb=20170727171344",
    pokemon_3: "https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349"
}

var user = {
    pokemon_name : Cookies.get("user_pokemon"),
    current_health : Cookies.get("user_currentHealth"),
    maximum:Cookies.get("user_maximum")
}

var comp = {
    pokemon_name : Cookies.get("com_pokemon"),
    current_health : Cookies.get("computer_currentHealth"),
    maximum:Cookies.get("comp_maximum")
}
checkWinner()
var user_html = document.getElementById("user");

var user_image = document.createElement("img");
user_image.setAttribute("src",pokemon_images[user.pokemon_name]);

user_html.appendChild(user_image);

var comp_html = document.getElementById("computer");

var comp_image = document.createElement("img");
comp_image.setAttribute("src",pokemon_images[comp.pokemon_name]);

comp_html.appendChild(comp_image);

var user_score = document.createElement("h3");
var comp_score = document.createElement("h3");

user_score.innerHTML= user.current_health + "/" + user.maximum;
user_score.setAttribute("id","user_score");

user_html.appendChild(user_score);

comp_score.innerHTML= comp.current_health + "/" + comp.maximum;
comp_score.setAttribute("id","comp_score");

comp_html.appendChild(comp_score);

//range 0-10
function attack1(lower_limit,upperlimit){

    console.log(lower_limit);
    var randomdg =lower_limit + Math.round(Math.random()*(upperlimit-lower_limit));
    comp.current_health -= randomdg;
    updateCookies()
    checkWinner();
    computer_attack();
    updateCookies()
    checkWinner();
    updateHtml();

    
}



function updateCookies(){
    Cookies.set("user_currentHealth",user.current_health);
    Cookies.set("computer_currentHealth",comp.current_health);

}
function updateHtml(){

    var user_score = document.getElementById("user_score");
    user_score.innerHTML= user.current_health + "/" + user.maximum;
    var comp_score = document.getElementById("comp_score");
    comp_score.innerHTML= comp.current_health + "/" + comp.maximum;

   
}

function computer_attack(){
    var randomdg = Math.round(Math.random()*35);
    user.current_health -= randomdg;

}
function checkWinner(){
    var body_html = document.getElementsByTagName("body");
    if(user.current_health <= 0){
        body_html[0].innerHTML = " YOU LOST ";

    }
    else  if(comp.current_health <= 0){
        body_html[0].innerHTML = " YOU WIN, CONGRATS ";

    }

}