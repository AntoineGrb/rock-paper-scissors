
/*----------- Variables & constantes ----------------- */
const handsArray = ["rock" , "paper" , "scissors"];
let userScore = 0;
let iaScore = 0;
let winGame = "";


/*----------- Définition des deux fonctions de l'IA ----------------- */
function random() {

let handsIndex = Math.floor(Math.random()*handsArray.length);
let iaHand = handsArray[handsIndex];
return iaHand;

}

/* Fonction expert à définir */


/*----------------- Code ----------------- */

/* 0 - Reset les variables */
let userHand = "";
let iaHand = "";

let test = document.getElementById("zone__test");
test.innerHTML="<p> balise </p>";

/* 1 - Déclenchement de l'évènement */

/* document.querySelector(".user__board__select__rock")
        .addEventListener("click" , function(event) {

            event.stopPropagation();
            event.preventDefault();
            
            userHand = "rock";
            document.querySelector(".zone__test")
                    .innerHTML = userHand;

        }); */
