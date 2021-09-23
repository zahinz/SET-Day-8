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




// ? change icon when autoplay 



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

    vid.muted = false;
    muteLabel.style.display = `none`
    unmuteLabel.style.display = `none`
    volLabel.style.display = `block`
    volume += num;
    
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

    vid.volume = volume;
    console.log(volume, 3);
    // NEW KNOWLEDGE HERE 
    // *add animation className
    volLabel.classList.add(`vol-fade-out`);
    console.log(volLabel.classList);
    volLabel.innerHTML = Math.round(volume*100);

    // *remove animation className after 2.5 seconds
    setTimeout(function removeClass() {
        volLabel.classList.remove(`vol-fade-out`);
        volLabel.style.display = `none`;
    console.log(volLabel.classList);
     } , 2500)
    
    
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

