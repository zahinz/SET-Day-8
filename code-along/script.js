let score = 0;

// ? count function scope
function count(num) {


    // ADDITION & SUBTRACTION
    score += num;
    console.log(`button clicked`, `score = ${score}`);

    // REMAIN ZERO WHEN HIT 0
    if (score < 0) {
        score = 0;
    }

    // DISPLAY THE NUMBER IN H1
    document.querySelector(`h1`).innerHTML = score;

    // CHANGE THE BG COLOR WHEN CERTAIN NUMBER
    if (score > 10 && score <= 20) {
        document.querySelector(`#container`).style.backgroundColor = `orange`;
    }

    // NEW KNOWLEDGE HERE
    else if (score > 20 && score <= 30) {
        document.querySelector(`#container`).style.backgroundColor = `purple`;
    }

    else {
        document.querySelector(`#container`).style.backgroundColor = `white`;
    }
}


// ? changeBg function scope
function changeBg(test) {
    document.querySelector(`#container`).style.backgroundColor = test;
    console.log(typeof document.querySelector(`#container`).style.backgroundColor);
    
}

// ? mouse over function using HTML attribute
function overBtn1(name) {
    document.querySelector(`.color-btn-blue`).style.backgroundColor = name;
}

// ? mouse out function using HTML attribute
function outBtn1(name) {
    document.querySelector(`.color-btn-blue`).style.backgroundColor = name;
}


// ! NEW KNOWLEDGE
// *red button

document.getElementById(`red-btn`).addEventListener(`mouseover`, overBtn);
document.getElementById(`red-btn`).addEventListener(`mouseout`, outBtn);

// *pink button

document.getElementById(`pink-btn`).addEventListener(`mouseover`, overBtn);
document.getElementById(`pink-btn`).addEventListener(`mouseout`, outBtn);


// ? mouse over function with event listener
function overBtn(evt) {
    console.log(this);
    this.style.backgroundColor = `red`;
}

// ? mouse out function with event listener
function outBtn(evt) {
    console.log(this);
    this.style.backgroundColor = 'yellow';
}
