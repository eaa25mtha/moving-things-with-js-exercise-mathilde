"use strict";


/*-------------------------------
OPGAVE 1, 2 OG 3
FLYT DODGER MED PILETASTERNE
--------------------------------*/

//hent dodger fra html med DOM 
const dodger = document.getElementById("dodger");


//moveDodgerLeft funktion
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 20}px`;
        playSoundOnMovement();
    } 

    if (left == 0){
        playGameOverSound();
    }
}

//moveDodgerRight funktion
//360 er bredden på den sorte firkant
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 20}px`;
        playSoundOnMovement();
    }

    if (left == 360) {
        playGameOverSound();
    }
}


//moveDodgerUp funktion
//380 er højden på den sorte firkant
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 20}px`;
        playSoundOnMovement();
    }

    if (bottom == 380) {
        playGameOverSound();
    }
}


//moveDodgerDown funktion
function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 20}px`;
        playSoundOnMovement();
    }

    if (bottom == 0) {
        playGameOverSound();
    }
}



//addEventListener der igangsætter funktionerne hvis tasterne trykkes ned
// e for event og e.key for event.key
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }

    if (e.key === "ArrowUp") {
        moveDodgerUp();
    } 

    if (e.key === "ArrowDown") {
        moveDodgerDown();
    } 
});



/*------------------------------------
OPGAVE 4 OG 5
AUDIO OBJEKTER
--------------------------------------*/

//afspil lyd når piletasterne klikkes 
const movementSound = document.getElementById("movementSound");

function playSoundOnMovement () {
    movementSound.currentTime = 0;
    movementSound.play();
}


//game over lyd når dodger rammer kanterne
const gameoverSound = document.getElementById("gameoverSound");

function playGameOverSound () {
    gameoverSound.currentTime = 0;
    gameoverSound.play();
}







