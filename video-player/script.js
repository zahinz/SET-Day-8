// ? INSERT GREETING NAME BY PROMPT
let myName = document.getElementById(`guestName`)
console.log(myName);

let fillName = prompt(`Hi there, welcome to my player. What is your name?`)
console.log(fillName);

myName.innerHTML=`${fillName}`


// ? DECLARE VARIABLE

// *video ID
let vid = document.getElementById(`video`)

// *player pause status
let pauseStatus = false

// *play pause button
let ico = document.getElementById(`playBtn`)

// *initial volume
let volume = 1;

// *loop status
vid.loop = false

// *loop icon
let loopIco = document.getElementById(`loopBtn`)

// *loop label 
let loopLabel = document.getElementById(`loopTxt`)

// *mute label
let muteLabel = document.getElementById(`muteTxt`)
let unmuteLabel = document.getElementById(`unmuteTxt`)

// *volume label 
let volLabel = document.getElementById(`volTxt`)

// *testing timer
let timerSet = 0

// *input ID
let myInput = document.getElementById(`inputField`)




// ? ONCLICK FUNCTION

// *play pause and change icon function
function playVid () {
    if (pauseStatus == true) {
        vid.play();
        pauseStatus = false;
        console.log(pauseStatus);
        ico.innerHTML = `<i class="fas fa-pause"></i>`
        console.log(`this is pause status `, vid.paused);
    }

    else if (pauseStatus == false) {
        vid.pause();
        pauseStatus = true;
        console.log(pauseStatus);
        ico.innerHTML = `<i class="fas fa-play"></i>`
        console.log(`this is pause status `, vid.paused);
    }
}

// *volume controller
function volLevel(num) {

    // *check mute status
    vid.muted = false;

    // *disable mute label
    muteLabel.style.display = `none`
    unmuteLabel.style.display = `none`

    // *enable volume label
    volLabel.style.display = `block`

    // *increase or decrease volume
    volume += num;
    
        // *limit the max and min
        if (volume < 0.1) {
            volume = 0
            muteLabel.style.display = `block`
            volLabel.style.display = `none`
            console.log(volume, 1);
        }

        else if (volume > 1) {
            volume = 1
            console.log(volume, 2);
        }

    // *apply the number on video
    vid.volume = volume;
    console.log(volume, 3);


    // ! NEW KNOWLEDGE HERE 
    // *add animation className to fade out volume label
    volLabel.classList.add(`vol-fade-out`);
    // console.log(volLabel.classList);

    // *display volume label & round the number into percentage
    volLabel.innerHTML = Math.round(volume*100);

    // *remove animation className after 2.5 seconds
    timerSet = setTimeout(function removeClass() {
        volLabel.classList.remove(`vol-fade-out`);
        volLabel.style.display = `none`;
    // console.log(volLabel.classList);
    } , 2500)

    console.log(timerSet);
    
}

// *loop video button
function loopVid() {
    if (vid.loop == false) {
        vid.loop = true
        console.log(`loop video status`, vid.loop);
        loopLabel.innerHTML = `loop`;
        loopLabel.style.display = `block`
        loopIco.innerHTML = `<i class="fas fa-redo active"></i>`
    }
    else if (vid.loop == true) {
        vid.loop = false
        console.log(`loop video status`, vid.loop);
        loopLabel.innerHTML = ``;
        loopLabel.style.display = `none`
        loopIco.innerHTML = `<i class="fas fa-redo idle"></i>`
    }
}


// *switch video
function switchVid(vidFile) {
    vid.src = vidFile
    pauseStatus = false
    console.log(pauseStatus);
    ico.innerHTML = `<i class="fas fa-pause"></i>`
}


// *alert after enter input 
// ! NEW KNOWLEDGE HERE
function yes() {
    alert(`When you love what you have, you have everything you need.`) 
}
function no() {
    alert(`Problems are not stop signs, they are guidelines.`) 
}
myInput.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.code === `Enter`) {
        // ?execute function after enter

        // *log keydown e.code == `Enter`
        console.log(`I PRESS ENTER`);

        // *log input value
        console.log(myInput.value);

        if (myInput.value == `happy`) {
            yes() ;
        }
        else if (myInput.value == `Happy`) {
            yes() ;
        }
        else if (myInput.value == `HAPPY`) {
            yes() ;
        }
        else {
            no() ;
        }

        // *clear input value after press Enter
        myInput.value = ``;
    }
})

