//set audio when press down the key

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  
  //convert Key Code : https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
  switch (key.keyCode) {
    //keyA = 65
    case 65: {
      var audio = new Audio("./assets/notes/a4.mp3");
      audio.play();
      break;
    }
    //keyW
    case 87: {
      var audio = new Audio("./assets/notes/a-4.mp3");
      audio.play();
      break;
    }
    //keyS
    case 83: {
      var audio = new Audio("./assets/notes/b4.mp3");
      audio.play();
      break;
    }
    //keyD
    case 68: {
      var audio = new Audio("./assets/notes/c4.mp3");
      audio.play();
      break;
    }
    //keyR
    case 82: {
      var audio = new Audio("./assets/notes/c-4.mp3");
      audio.play();
      break;
    }
    //keyF
    case 70: {
      var audio = new Audio("./assets/notes/d4.mp3");
      audio.play();
      break;
    }
    //keyT
    case 84: {
      var audio = new Audio("./assets/notes/d-4.mp3");
      audio.play();
      break;
    }
    //keyG
    case 71: {
      var audio = new Audio("./assets/notes/e4.mp3");
      audio.play();
      break;
    }
    //keyH
    case 72: {
      var audio = new Audio("./assets/notes/f4.mp3");
      audio.play();
      break;
    }
    //keyU
    case 85: {
      var audio = new Audio("./assets/notes/f-4.mp3");
      audio.play();
      break;
    }
    //keyJ
    case 74: {
      var audio = new Audio("./assets/notes/g4.mp3");
      audio.play();
      break;
    }
    //keyI
    case 73: {
      var audio = new Audio("./assets/notes/g-4.mp3");
      audio.play();
      break;
    }
    default: {
    }
  }
}
