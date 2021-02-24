// //set audio when press down the key

// window.addEventListener('keydown', checkKeyPress, false);
// function checkKeyPress(key) {
//   //convert Key Code : https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
//   switch (key.keyCode) {
//     //tone 4
//     //keyU
//     case 85: {
//       audio.play();
//       break;
//     }
//     //keyI
//     case 73: {
//       // var audio = new Audio('./assets/c4/Piano.ff.C4.mp3');

//       audio.play();
//       break;
//     }
//     //key9
//     case 57: {
//       var audio = new Audio('./assets/c4/Piano.ff.Db4.mp3');
//       audio.play();
//       break;
//     }
//     //keyO
//     case 79: {
//       var audio = new Audio('./assets/c4/Piano.ff.D4.mp3');

//       audio.play();
//       break;
//     }
//     //key0
//     case 48: {
//       var audio = new Audio('./assets/c4/Piano.ff.Eb4.mp3');
//       audio.play();
//       break;
//     }
//     //keyP
//     case 80: {
//       var audio = new Audio('./assets/c4/Piano.ff.E4.mp3');

//       audio.play();
//       break;
//     }
//     //keyZ
//     case 90: {
//       var audio = new Audio('./assets/c4/Piano.ff.F4.mp3');

//       audio.play();
//       break;
//     }
//     //keyS
//     case 83: {
//       var audio = new Audio('./assets/c4/Piano.ff.Gb4.mp3');
//       audio.play();
//       break;
//     }
//     //keyX
//     case 88: {
//       var audio = new Audio('./assets/c4/Piano.ff.G4.mp3');

//       audio.play();
//       break;
//     }
//     //keyD
//     case 68: {
//       var audio = new Audio('./assets/c4/Piano.ff.Ab4.mp3');
//       audio.play();
//       break;
//     }
//     //keyC
//     case 67: {
//       var audio = new Audio('./assets/c4/Piano.ff.A4.mp3');

//       audio.play();
//       break;
//     }
//     //keyF
//     case 70: {
//       var audio = new Audio('./assets/c4/Piano.ff.Bb4.mp3');
//       audio.play();
//       break;
//     }
//     //key V
//     case 86: {
//       var audio = new Audio('./assets/c4/Piano.ff.B4.mp3');
//       audio.play();
//       break;
//     }
//     //================================= tone 3 ==============================
//     //key Q
//     case 81: {
//       var audio = new Audio('./assets/c3/Piano.ff.C3.mp3');
//       audio.play();
//       break;
//     }
//     //key W
//     case 87: {
//       var audio = new Audio('./assets/c3/Piano.ff.D3.mp3');
//       audio.play();
//       break;
//     }
//     //key E
//     case 69: {
//       var audio = new Audio('./assets/c3/Piano.ff.E3.mp3');
//       audio.play();
//       break;
//     }
//     //key R
//     case 82: {
//       var audio = new Audio('./assets/c3/Piano.ff.F3.mp3');
//       audio.play();
//       break;
//     }
//     //key T
//     case 84: {
//       var audio = new Audio('./assets/c3/Piano.ff.G3.mp3');
//       audio.play();
//       break;
//     }
//     //key Y
//     case 89: {
//       var audio = new Audio('./assets/c3/Piano.ff.A3.mp3');
//       audio.play();
//       break;
//     }
//     //key U
//     case 85: {
//       var audio = new Audio('./assets/c3/Piano.ff.B3.mp3');
//       audio.play();
//       break;
//     }
//     //key 2
//     case 50: {
//       var audio = new Audio('./assets/c3/Piano.ff.Db3.mp3');
//       audio.play();
//       break;
//     }
//     //key 3
//     case 51: {
//       var audio = new Audio('./assets/c3/Piano.ff.Eb3.mp3');
//       audio.play();
//       break;
//     }
//     //key 5
//     case 53: {
//       var audio = new Audio('./assets/c3/Piano.ff.Gb3-error.mp3');
//       audio.play();
//       break;
//     }
//     //key 6
//     case 54: {
//       var audio = new Audio('./assets/c3/Piano.ff.Ab3.mp3');
//       audio.play();
//       break;
//     }
//     //key 7
//     case 55: {
//       var audio = new Audio('./assets/c3/Piano.ff.Bb3.mp3');
//       audio.play();
//       break;
//     }
//     // ============================================ tone 5 ===========================================
//     //key B
//     case 66: {
//       var audio = new Audio('./assets/c5/Piano.ff.C5.mp3');
//       audio.play();
//       break;
//     }
//     //key N
//     case 78: {
//       var audio = new Audio('./assets/c5/Piano.ff.D5.mp3');
//       audio.play();
//       break;
//     }
//     //key M
//     case 77: {
//       var audio = new Audio('./assets/c5/Piano.ff.E5.mp3');
//       audio.play();
//       break;
//     }
//     //key ,
//     case 44: {
//       var audio = new Audio('./assets/c5/Piano.ff.F5.mp3');
//       audio.play();
//       break;
//     }
//     //key .
//     case 46: {
//       var audio = new Audio('./assets/c5/Piano.ff.G5.mp3');
//       audio.play();
//       break;
//     }
//     //key /
//     case 47: {
//       var audio = new Audio('./assets/c5/Piano.ff.A5.mp3');
//       audio.play();
//       break;
//     }
//     //key \
//     case 55: {
//       var audio = new Audio('./assets/c5/Piano.ff.B5.mp3');
//       audio.play();
//       break;
//     }
//     //key H
//     case 72: {
//       var audio = new Audio('./assets/c5/Piano.ff.Db5.mp3');
//       audio.play();
//       break;
//     }
//     //key J
//     case 74: {
//       var audio = new Audio('./assets/c5/Piano.ff.Eb5.mp3');
//       audio.play();
//       break;
//     }
//     //key L
//     case 76: {
//       var audio = new Audio('./assets/c5/Piano.ff.Gb5.mp3');
//       audio.play();
//       break;
//     }
//     //key ;
//     case 59: {
//       var audio = new Audio('./assets/c5/Piano.ff.Ab5.mp3');
//       audio.play();
//       break;
//     }
//     //key '
//     case 39: {
//       var audio = new Audio('./assets/c5/Piano.ff.Bb5.mp3');
//       audio.play();
//       break;
//     }

//     default: {
//     }
//   }
// }
