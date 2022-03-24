// function playAudio() {

// }

var drums = document.querySelectorAll(".drum")

for (let cycle = 0; cycle < drums.length; cycle++) {
  // Runs x amount of drums times, with values of cycle 0 through buttons.
drums[cycle].addEventListener("click", function() {
let key = this.innerHTML;
soundCheck(key);
buttonAnimation(key);
});
}


document.addEventListener("keydown", function(e) {
  let keyListen = e.key;
  soundCheck(keyListen);
  buttonAnimation(keyListen);
});

function soundCheck(key) {
  switch (key) {
case "w": // If input is w, do following:
var tom1 = new Audio("sounds/tom-1.mp3"); // set sound
tom1.play(); // play sound
  break;

case "a":
  let tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;

case "s":
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
        break;

case "j":
        let kb = new Audio("sounds/kick-bass.mp3");
        kb.play();
        break;

case "k":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

case "h":
      let aye = new Audio("sounds/aye.mp3");
      aye.play();
      break;
default:
      return;
    }
}

function buttonAnimation(keyAni) {
if (keyAni) {
  var keyLight = document.querySelector("." + keyAni);
  keyLight.classList.toggle("pressed");
setTimeout(function() {
  keyLight.classList.toggle("pressed");
}, 100);
}
}
