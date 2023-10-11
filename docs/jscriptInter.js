//  Thomas Hammer
//DOM Sequence
window.addEventListener('DOMContentLoaded',init,false);
            
//Button sequence
function init(){
    //Alert for when the page is loaded, good for testing
    alert ('Your page has loaded! This is great!');
    
    // The buttons
    var buttons = document.getElementsByTagName("button");
    var changeColorButton = buttons[0];
    var buttonDeux = buttons[1];
    var resetChanges = buttons[2];
    
    // Event listeners
    changeColorButton.addEventListener('click', changeColor,false);
    buttonDeux.addEventListener('click', removeBackground, false);
}

//Button function to change the color of the background
function changeColor(){
    var colorMe1 = document.getElementById("colorToggle");
    colorMe1.style.backgroundColor = "blue";
}

//Button to remove the background image
function removeBackground(){
    document.body.style.backgroundImage = "none";
}

// Toggle Functions

function fieldinit(){
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
    }
}

function toggle (){
    var id = this.id;
    switch (id) {
        case "RPGtoggle": {
            var rpgs = document.getElementsByClassName ("RPG");
            for (var i = 0; i < places.length; i++){
                rpgs[i].classList.toggle("on")
            }
        };
        break;
        case "FPStoggle": {
            var fpses = document.getElementsByClassName ("FPS");
            for (var i = 0; i < places.length; i++){
                fpses[i].classList.toggle("on")
            }
        };
        break;
        case "SurHortoggle": {
            var sH = document.getElementsByClassName ("SurHor");
            for (var i = 0; i < places.length; i++){
                sH[i].classList.toggle("on")
            }
        };
        break;
        case "FarmSimtoggle": {
            var farmsim = document.getElementsByClassName ("Farm");
            for (var i = 0; i < places.length; i++){
                farmsim[i].classList.toggle("on")
            }
        };
        break;
    }
}
window.onload = fieldinit;