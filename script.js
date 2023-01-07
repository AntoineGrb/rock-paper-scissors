
/*----------- Variables & constantes ----------------- */
const handsArray = ["rock" , "paper" , "scissors"];
let userScore = 0;
let iaScore = 0;
let winGame = "";
let userHand = "";
let iaHand = "";
let userChoice = document.querySelector(".user__board__play__img > img");
let iaChoice = document.querySelector(".IA__board__play__img > img")
let userPlayedArray = [];
let iaPlayedArray = [];
let winsArray = [];


// Définir le mode de l'IA
let iaMode = document.querySelector("#mode"); //On sélectionne le formulaire #mode
iaMode.addEventListener("change" , (event) => { //On écoute un évènement "change" pour lequel on récupère la valeur target
        let iaModeValue = event.target.value;
        console.log("Mode de l'IA : " , iaModeValue);
        // Ajouter la fonction reset
})

/* Fonction random */
function random() {

        let handsIndex = Math.floor(Math.random()*handsArray.length);
        iaHand = handsArray[handsIndex];
        return iaHand;
        }

/* Fonction expert */
function expert() {
        
        if (userPlayedArray.length == 0) {
                iaHand = "paper";
        }

        else if (userPlayedArray[0] == userPlayedArray[1] && userPlayedArray[1] == userPlayedArray[2] ) {
                iaHand ="rock";
        }

        else if (winGame = "User") {
                iaHand = "scissors";
        }

        else if (winGame = "IA") {
                iaHand = "rock";
        }
}

/* 1 - Choix de la main user - déclenchement de l'évènement */

// L'utilisateur joue Rock
document.querySelector(".user__board__select__rock")
        .addEventListener("click" , function(event) {

                event.stopPropagation();
                event.preventDefault();

                // Main de l'utilisateur
                userHand = "rock";
                console.log("User plays : " , userHand);
                userChoice.src = "Images/rock_big.png"; // Chargement de l'image de la main jouée
                userChoice.title = "User plays rock !";

                // Main de l'IA
                // Random
                random();
                console.log("IA plays : " , iaHand);
                iaChoice.src = "Images/" + iaHand + "_big.png"; // Chargement de l'image de la main jouée random
                iaChoice.title = "IA plays " + iaHand + " !";

                //Expert
                // expert();
                // userPlayedArray.unshift(userHand); // Historique des mains jouées par le user
                // iaPlayedArray.unshift(iaHand); // Historique des mains jouées par l'IA'
                // console.log("Historique User : " , userPlayedArray);
                // console.log("Historique IA : " , iaPlayedArray);

                console.log("IA plays : " , iaHand);
                iaChoice.src = "Images/" + iaHand + "_big.png"; // Chargement de l'image de la main jouée par l'IA
                iaChoice.title = "IA plays " + iaHand + " !";
                
                // Le duel et la maj des scores
                if (iaHand === userHand) {
                        userScore = userScore;
                        iaScore = iaScore;
                        winGame = "Egalité";
                        winsArray.unshift(winGame); // Historique des gagnants
                        console.log("Tableau des vainqueurs : " , winsArray)

                        document.querySelector(".user__board__play").style.border = "solid 10px black";
                        document.querySelector(".IA__board__play").style.border = "solid 10px black";
                }
                else if (iaHand === "paper") {
                        ++iaScore;
                        winGame = "IA";
                        winsArray.unshift(winGame);
                        console.log("Tableau des vainqueurs : " , winsArray)

                        document.querySelector(".user__board__play").style.border = "solid 10px red";
                        document.querySelector(".IA__board__play").style.border = "solid 10px blue";
                }
                else {
                        ++userScore;
                        winGame = "User";
                        winsArray.unshift(winGame);
                        console.log("Tableau des vainqueurs : " , winsArray)
                        
                        document.querySelector(".user__board__play").style.border = "solid 10px blue";
                        document.querySelector(".IA__board__play").style.border = "solid 10px red";
                }
                
                document.querySelector(".user__title__score__variable").innerText = userScore;
                document.querySelector(".IA__title__score__variable").innerText = iaScore;

                //Conditions de fin de partie
                if (userScore == 3) {
                        document.querySelector(".result__text__variable").innerText = "USER ";
                        document.querySelector(".result").style.display = "flex";
                }

                else if (iaScore == 3) {
                        document.querySelector(".result__text__variable").innerText = "IA ";
                        document.querySelector(".result").style.display = "flex";
                }
        });

// L'utilisateur joue Paper
document.querySelector(".user__board__select__paper")
        .addEventListener("click" , function(event) {

                event.stopPropagation();
                event.preventDefault();
            
                // Main de l'utilisateur
                userHand = "paper";
                console.log("User plays : " , userHand);
                userChoice.src = "Images/paper_big.png";
                userChoice.title = "User plays paper !";

                // Main de l'IA
                //Random
                random();
                console.log("IA plays : " , userHand);
                iaChoice.src = "Images/" + iaHand + "_big.png"; // Chargement de l'image de la main jouée random
                iaChoice.title = "IA plays " + iaHand + " !";

                //Expert

                // Le duel et maj des scores
                if (iaHand === userHand) {
                        userScore = userScore;
                        iaScore = iaScore;
                        document.querySelector(".user__board__play").style.border = "solid 10px black";
                        document.querySelector(".IA__board__play").style.border = "solid 10px black";
                }
                else if (iaHand === "scissors") {
                        ++iaScore;
                        document.querySelector(".user__board__play").style.border = "solid 10px red";
                        document.querySelector(".IA__board__play").style.border = "solid 10px blue";
                }
                else {
                        ++userScore;
                        document.querySelector(".user__board__play").style.border = "solid 10px blue";
                        document.querySelector(".IA__board__play").style.border = "solid 10px red";
                }
                
                document.querySelector(".user__title__score__variable").innerText = userScore;
                document.querySelector(".IA__title__score__variable").innerText = iaScore;

                // Condition de fin de partie
                if (userScore == 3) {
                        document.querySelector(".result__text__variable").innerText = "USER ";
                        document.querySelector(".result").style.display = "flex";
                }

                else if (iaScore == 3) {
                        document.querySelector(".result__text__variable").innerText = "IA ";
                        document.querySelector(".result").style.display = "flex";
                }
        });

// L'utilisateur joue Scissors
document.querySelector(".user__board__select__scissors")
        .addEventListener("click" , function(event) {

                event.stopPropagation();
                event.preventDefault();
        
                userHand = "scissors";
                console.log("User plays : " , userHand);

                // Main de l'utilisateur
                userChoice.src = "Images/scissors_big.png";
                userChoice.title = "User plays scissors !";

                // Main de l'IA
                //Random
                random();
                console.log("IA plays : " , userHand);
                iaChoice.src = "Images/" + iaHand + "_big.png"; // Chargement de l'image de la main jouée random
                iaChoice.title = "IA plays " + iaHand + " !";

                //Expert

                // Le duel et maj des scores
                if (iaHand === userHand) {
                        userScore = userScore;
                        iaScore = iaScore;
                        document.querySelector(".user__board__play").style.border = "solid 10px black";
                        document.querySelector(".IA__board__play").style.border = "solid 10px black";
                }
                else if (iaHand === "rock") {
                        ++iaScore;
                        document.querySelector(".user__board__play").style.border = "solid 10px red";
                        document.querySelector(".IA__board__play").style.border = "solid 10px blue";
                }
                else {
                        ++userScore;
                        document.querySelector(".user__board__play").style.border = "solid 10px blue";
                        document.querySelector(".IA__board__play").style.border = "solid 10px red";
                }
                
                document.querySelector(".user__title__score__variable").innerText = userScore;
                document.querySelector(".IA__title__score__variable").innerText = iaScore;

                // Conditions de fin de partie
                if (userScore == 3) {
                        document.querySelector(".result__text__variable").innerText = "USER ";
                        document.querySelector(".result").style.display = "flex";
                }

                else if (iaScore == 3) {
                        document.querySelector(".result__text__variable").innerText = "IA ";
                        document.querySelector(".result").style.display = "flex";
                }
        });


// Reset de la partie --> Faire une fonction
document.querySelector(".result")
        .addEventListener("click" , function(event) {

                event.stopPropagation();
                event.preventDefault();
                iaScore = 0;
                userScore = 0;
                winGame = 0;
                document.querySelector(".user__title__score__variable").innerText = 0;
                document.querySelector(".IA__title__score__variable").innerText = 0;
                document.querySelector(".result").style.display = "none";
                userChoice.src = "";
                userChoice.title = "";
                iaChoice.src = "";
                iaChoice.title = "";
                document.querySelector(".user__board__play").style.border = "none";
                document.querySelector(".IA__board__play").style.border = "none";

        })