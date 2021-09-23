// DECLARE ALL THE VARIABLES
// ! no need # when declare ID

// ? VIDEO ID
let vid = document.getElementById(`video-source`);

// ? BUTTON ID
// let play = document.getElementById(`playBtn`).style.display;
// let pause = document.getElementById(`pauseBtn`).style.display;
let volUpBtn = document.getElementById(`volUp`);
let volDownBtn = document.getElementById(`volDown`);

// ? VOLUME VARIABLE
let vol = 1

// ? VIDEO CONDITION
let isPlaying = false;

// let switchIcon = "document.getElementById(`switchBtn`).innerHTML";



// BUTTON FUNCTION

// function playVid() {
//     vid.play();
//     console.log(`clicked play`);

//     // ! work on this later
//     play = `block`;
//     pause = `none`;
// }

// function pauseVid() {
//     vid.pause();
//     console.log(`clicked pause`);

//     play = `none`;
//     pause = `block`;
// }

// VOLUME BUTTON 2 FUNCTION
// function volUp() {
    
//     if (vol < 0.9) {
//     vol += 0.1;
//     console.log(vol);
//     vid.volume = vol;
//     }

//     else {
//         vol = 1;
//     }

// }

// function volDown() {
//     if (vol > 0.1) {
//     vol -= 0.1;
//     console.log(vol);
//     vid.volume = vol;
//     }

//     else {
//         vol = 0;
//     }
// }


// VOLUME BUTTON 1 FUNCTION
function volUpdate(num) {
    if (num > 0) {
        if (vol < 0.9) {
            vol += 0.1;
            console.log(vol);
            vid.volume = vol;
            }
        
            else {
                vol = 1;
            }
    }
    else if (num < 0){
        if (vol > 0.1) {
            vol -= 0.1;
            console.log(vol);
            vid.volume = vol;
            }
        
            else {
                vol = 0;
            }
    }
}


// SWITCH PLAY AND PAUSE FUNCTION

function switchClick() {

    // ADD CSS ANIMATION
    // document.getElementById(`switchBtn`).classList.add(`bounceAnimation`);

    if(isPlaying == false) {
        // PLAY VID AND UPDATE 
        vid.play();
        isPlaying = true;

        // CHANGE ICON TO PAUSE
        document.getElementById(`switchBtn`).innerHTML = `<i class="fas fa-pause"></i>`;
        console.log(isPlaying);
        // switchIcon = "<i class="fas fa-play"></i>";
        return;

    }
    
    if (isPlaying == true) {
        // PAUSE VID AND UPDATE
        vid.pause();
        isPlaying = false;

        // CHANGE ICON TO PLAY
        document.getElementById(`switchBtn`).innerHTML = `<i class="fas fa-play"></i>`;
        // switchIcon = "<i class="fas fa-pause"></i>";
        console.log(isPlaying);
        return
    }
}






function switchVid(fileName) {
    vid.src = fileName;
    
}


