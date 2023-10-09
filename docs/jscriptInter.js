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