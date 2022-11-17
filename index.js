// Home team...

let pO = document.getElementById("score-home");
let pTo = document.getElementById("score-home");
let pTh = document.getElementById("score-home");


let homecount = 0;

function plusOne() {
    homecount += 1;
    pO.textContent = homecount;
}

function plusTwo() {
    homecount += 2;
    pTo.textContent = homecount;
}

function plusThree() {
    homecount += 3;
    pTh.textContent = homecount;
}

let fH = document.getElementById("foul-h");
let foulcountH = 0;

function foulH(){
    foulcountH += 1;
    fH.textContent = foulcountH;
}


// Guest ....
let gpO = document.getElementById("score-guest");
let gpTo = document.getElementById("score-guest");
let gpTh = document.getElementById("score-guest");

let guestcount = 0;

function gplusOne() {
    guestcount += 1;
    gpO.textContent = guestcount;
}

function gplusTwo() {
    guestcount += 2;
    gpTo.textContent = guestcount;
}

function gplusThree() {
    guestcount += 3;
    gpTh.textContent = guestcount;
}

let fG = document.getElementById("foul-g");
let foulcountG = 0;

function foulG(){
    foulcountG += 1;
    fG.textContent = foulcountG;
}



// Reset....



function onReset(){
    //Home
    pO.textContent = 0;
    pTo.textContent = 0;
    pTh.textContent = 0;
    homecount = 0;
    
    fH.textContent = 0;
    foulcountH = 0;

    // Guest
    gpO.textContent = 0;
    gpTo.textContent = 0;
    gpTh.textContent = 0;
    guestcount = 0;

    fG.textContent = 0;
    foulcountG = 0;


}