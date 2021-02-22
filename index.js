//set audio when press down the key

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  
  //convert Key Code : https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
  switch (key.keyCode) {
  
    
    //keyU
    case 85: {
      var audio = new Audio("./assets/c4/Piano.ff.C4.mp3");
      audio.play();
      break;
    }
    //keyI
    case 73: {
      var audio = new Audio("./assets/c4/Piano.ff.D4.mp3");
      audio.play();
      break;
    }
    //key9
    case 57: {
      var audio = new Audio("./assets/c4/Piano.ff.Db4.mp3");
      audio.play();
      break;
    }
    //keyO
    case 79: {
      var audio = new Audio("./assets/c4/Piano.ff.E4.mp3");
      audio.play();
      break;
    }
    //key0
    case 48: {
      var audio = new Audio("./assets/c4/Piano.ff.Eb4.mp3");
      audio.play();
      break;
    }
    //keyP
    case 80: {
      var audio = new Audio("./assets/c4/Piano.ff.F4.mp3");
      audio.play();
      break;
    }
    //keyZ
    case 90: {
      var audio = new Audio("./assets/c4/Piano.ff.G4.mp3");
      audio.play();
      break;
    }
    //keyS
    case 83: {
      var audio = new Audio("./assets/c4/Piano.ff.Gb4.mp3");
      audio.play();
      break;
    }
     //keyX
    case 88: {
      var audio = new Audio("./assets/c4/Piano.ff.A4.mp3");
      audio.play();
      break;
    }
    //keyD
    case 68: {
      var audio = new Audio("./assets/c4/Piano.ff.Ab4.mp3");
      audio.play();
      break;
    }
    //keyC
    case 67: {
      var audio = new Audio("./assets/c4/Piano.ff.B4.mp3");
      audio.play();
      break;
    }
    //keyF
    case 70: {
      var audio = new Audio("./assets/c4/Piano.ff.Bb4.mp3");
      audio.play();
      break;
    }
    default: {
    }
  }
}
