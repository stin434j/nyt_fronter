window.addEventListener("load", sideVises);


let liv;
let point;
let minPoint = 18;
let gameDone;
let gameTimer;
let maxTime = 40000; //husk også at rette animationen i css

function sideVises() {
    console.log("sideVises");


    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#gameover").removeEventListener("click", sideVises);
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#levelcomplete").removeEventListener("click", sideVises);



    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").addEventListener("click", startGame);



    //startGame();
}


function startGame() {
    console.log("startGame");
    gameDone = false;


    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").removeEventListener("click", startGame);


    clearTimeout(gameTimer);
    gameTimer = setTimeout(timeDone, maxTime);

    document.querySelector("#time_sprite").classList.remove("shrink");
    document.querySelector("#time_sprite").offsetHeight;

    document.querySelector("#time_sprite").classList.add("shrink");
    //Vis startskærm
    //TODO

    //Start musik
    //TODO


    //Nulstil liv og point
    liv = 3;
    point = 0;
    document.querySelector("#liv1").classList.remove("hide");

    document.querySelector("#liv2").classList.remove("hide");

    document.querySelector("#liv3").classList.remove("hide");


    // fade ind animation

    document.querySelector("#god_container1").classList.add("fade");
    document.querySelector("#god_container2").classList.add("fade");
    document.querySelector("#god_container3").classList.add("fade");
    document.querySelector("#god_container4").classList.add("fade");

    document.querySelector("#ond_container1").classList.add("fade");
    document.querySelector("#ond_container2").classList.add("fade");
    document.querySelector("#ond_container3").classList.add("fade");
    document.querySelector("#ond_container4").classList.add("fade");




    //Klik på ond bakterie --> ondPoint

    document.querySelector("#ond_container1").addEventListener("click", clickOnd);
    document.querySelector("#ond_container2").addEventListener("click", clickOnd);
    document.querySelector("#ond_container3").addEventListener("click", clickOnd);
    document.querySelector("#ond_container4").addEventListener("click", clickOnd);

    //Klik på god bakterie --> clickGod

    document.querySelector("#god_container1").addEventListener("click", clickGod);
    document.querySelector("#god_container2").addEventListener("click", clickGod);
    document.querySelector("#god_container3").addEventListener("click", clickGod);
    document.querySelector("#god_container4").addEventListener("click", clickGod);
}



function clickOnd() {
    console.log("click ond");
    //Pause fade animation

    console.log(this);


    document.querySelector("#score_board .antal").textContent = point;
    if (point >= 18) {
        levelComplete();
    }
    point += 2;

    this.classList.add("paused");

    //Start for  svind animation

    this.firstElementChild.classList.add("forsvind");

    // Spil bakterie lyd
    if (document.querySelector("#baklyd1").paused) {
        document.querySelector("#baklyd1").play();
        document.querySelector("#baklyd1").volume = 0.5;
        console.log("play1");
    } else {
        document.querySelector("#baklyd2").play();
        console.log("play2");

    }
    //TODO

    // Animationen er færdig med forsvinde --> nyBakterie    this.addEventListener("animationend", godRemove);
    this.addEventListener("animationend", nyOndBakterie);

}


function clickGod() {
    console.log("click god");
    //Pause fade animation

    document.querySelector("#liv" + liv).classList.add("hide");
    // Mist et liv
    liv--;

    //TRANSITIONS------>
    //Forsvindanimationen er færdig ->nyBakterie

    //Ingen liv tilbage -> stopSpillet
    if (liv == 0) {
        stopSpillet();
    }

    this.classList.add("paused");

    //Start forsvind animation
    this.firstElementChild.classList.add("forsvind");

    // Spil bakterie lyd
    if (document.querySelector("#godlyd").paused) {
        document.querySelector("#godlyd").play();
        document.querySelector("#godlyd").volume = 0.5;
        console.log("play1");
    }
    //TODO


    // Animationen er færdig med forsvinde --> nyBakterie    this.addEventListener("animationend", godRemove);
    this.addEventListener("animationend", nyGodBakterie);
}


function nyGodBakterie() {
    console.log("nyGodBakterie");
    //Fjern alle classer.
    // this.classList = "";

    console.log(this);


    this.classList = "fade";

    let randomNum = Math.floor(Math.random() * 8) + 1;
    this.classList.add("pos" + randomNum);

    this.classList.remove("fade");
    this.classList.offsetHeight;
    this.classList.add("fade");

    this.firstElementChild.classList.remove("forsvind");
}

function nyOndBakterie() {
    console.log("nyOndBakterie");
    //Fjern alle classer.
    // this.classList = "";

    console.log(this);

    //Giv svampen en ny (random) position

    this.classList = "fade";

    let randomNum = Math.floor(Math.random() * 8) + 1;
    this.classList.add("pos" + randomNum);


    this.firstElementChild.classList.remove("forsvind");
    this.classList.remove("fade");
    this.classList.offsetHeight;
    this.classList.add("fade");


}

function stopSpillet() {
    console.log("stopSpillet");

    //TODO: Gør dette efter alle transitions er sat på -> Sluk alle eventlistnere
    document.querySelector("#god_container1").classList.remove("fade");
    document.querySelector("#god_container2").classList.remove("fade");
    document.querySelector("#god_container3").classList.remove("fade");
    document.querySelector("#god_container4").classList.remove("fade");

    document.querySelector("#ond_container1").classList.remove("fade");
    document.querySelector("#ond_container2").classList.remove("fade");
    document.querySelector("#ond_container3").classList.remove("fade");
    document.querySelector("#ond_container4").classList.remove("fade");

    document.querySelector("#god_container1").removeEventListener("click", clickGod);
    document.querySelector("#god_container1").removeEventListener("animationend", nyGodBakterie);
    document.querySelector("#god_container2").removeEventListener("click", clickGod);
    document.querySelector("#god_container2").removeEventListener("animationend", nyGodBakterie);
    document.querySelector("#god_container3").removeEventListener("click", clickGod);
    document.querySelector("#god_container3").removeEventListener("animationend", nyGodBakterie);
    document.querySelector("#god_container4").removeEventListener("click", clickGod);
    document.querySelector("#god_container4").removeEventListener("animationend", nyGodBakterie);

    document.querySelector("#ond_container1").removeEventListener("click", clickOnd);
    document.querySelector("#ond_container1").removeEventListener("animationend", nyOndBakterie);
    document.querySelector("#ond_container2").removeEventListener("click", clickOnd);
    document.querySelector("#ond_container2").removeEventListener("animationend", nyOndBakterie);
    document.querySelector("#ond_container3").removeEventListener("click", clickOnd);
    document.querySelector("#ond_container3").removeEventListener("animationend", nyOndBakterie);
    document.querySelector("#ond_container4").removeEventListener("click", clickOnd);
    document.querySelector("#ond_container4").removeEventListener("animationend", nyOndBakterie);

    //TRANSITIONS------>
    //Mere end 17 points -> levelComplete
    if (liv == 0) {
        gameOver();
    } else {

        if (point >= 17) {
            levelComplete();
        } else {
            gameOver();
        }
    }


    //Ellers -> gameOver

}

function levelComplete() {
    console.log("level complete");

    gameDone = true;
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#levelcomplete").addEventListener("click", sideVises);


    //document.querySelector("#red_container1").classList = ("");
    //document.querySelector("#red_sprite1").classList.remove("drej");

    //document.querySelector("#blue_container1").classList = ("");
    //document.querySelector("#blue_sprite1").classList = ("");

    //document.querySelector("#blue_container2").classList = ("");
    //document.querySelector("#blue_sprite2").classList = ("");


}


function timeDone() {
    console.log("timeDone");
    if (gameDone == false) {
        if (point >= 18) {
            levelComplete();
        } else {
            gameOver();
        }
    }
}

function gameOver() {
    console.log("game over");

    gameDone = true;

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#gameover").addEventListener("click", sideVises);


    // document.querySelector("#red_container1").classList = ("");
    // document.querySelector("#red_sprite1").classList.remove("drej");

    // document.querySelector("#blue_container1").classList = ("");
    // document.querySelector("#blue_sprite1").classList = ("");

    // document.querySelector("#blue_container2").classList = ("");
    // document.querySelector("#blue_sprite2").classList = ("");
}
