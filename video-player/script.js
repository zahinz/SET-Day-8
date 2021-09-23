// ? INSERT GREETING NAME BY PROMPT
let myName = document.getElementById(`guestName`)
console.log(myName);

let fillName = prompt(`Hi there, welcome to my player. What is your name?`)
console.log(fillName);

myName.innerHTML=`${fillName}`


// ? DECLARE VARIABLE

// *video ID
let vid = document.getElementById(`video`)

// *player status
let statusVideo = false

// *play pause button
let ico = document.getElementById(`playBtn`)

// *initial volume
let volume = 1;

// *loop status
vid.loop = false

// *loop icon
loopIco = document.getElementById(`loopBtn`)




// ? change icon when autoplay 



// ? ONCLICK FUNCTION

// *play pause and change icon function
function playVid () {
    if (statusVideo == true) {
        vid.play();
        statusVideo = false;
        console.log(statusVideo);
        ico.innerHTML = `<i class="fas fa-pause"></i>`
        console.log(`this is pause status `, vid.paused);
    }

    else if (statusVideo == false) {
        vid.pause();
        statusVideo = true;
        console.log(statusVideo);
        ico.innerHTML = `<i class="fas fa-play"></i>`
        console.log(`this is pause status `, vid.paused);
    }
}

// *volume controller
function volLevel(num) {

    vid.muted = false;
    volume += num;
    
    if (volume < 0) {
        volume = 0
        console.log(volume, 1);
    }

    else if (volume > 1) {
        volume = 1
        console.log(volume, 2);
    }

    vid.volume = volume;
    console.log(volume, 3);
    
}

// *loop button
function loopVid() {
    if (vid.loop == false) {
        vid.loop = true
        console.log(vid.loop);
        loopIco.innerHTML = `<i class="fas fa-redo active"></i>`
    }
    else if (vid.loop == true) {
        vid.loop = false
        console.log(vid.loop);
        loopIco.innerHTML = `<i class="fas fa-redo idle"></i>`
    }
}


// *switch video
function switchVid(vidFile) {
    vid.src = vidFile
    statusVideo = false
    ico.innerHTML = `<i class="fas fa-pause"></i>`
}

