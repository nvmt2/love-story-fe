//create animation of key
$.value = '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
$(document).ready(function () {
  //set shadow the key
  $(window).keypress(function (e) {
    switch (e.originalEvent.key) {
      case 'v': {
        $('#white-key-c4').css('box-shadow', $.value);
        break;
      }
      case '`': {
        $('#white-key-d4').css('box-shadow', $.value);
        var audio = new Audio('./assets/c4/Piano.ff.C4.mp3');
        audio.play();
        break;
      }
      case '9': {
        $('#black-key-d-4').css('box-shadow', $.value);
        break;
      }
      case 'o': {
        $('#white-key-e4').css('box-shadow', $.value);
        break;
      }
      case '0': {
        $('#black-key-e-4').css('box-shadow', $.value);
        break;
      }
      case 'p': {
        $('#white-key-f4').css('box-shadow', $.value);
        break;
      }
      case 'z': {
        $('#white-key-g4').css('box-shadow', $.value);
        break;
      }
      case 's': {
        $('#black-key-g-4').css('box-shadow', $.value);
        break;
      }
      case 'x': {
        $('#white-key-a4').css('box-shadow', $.value);
        break;
      }
      case 'd': {
        $('#black-key-a-4').css('box-shadow', $.value);
        break;
      }
      case 'c': {
        $('#white-key-b4').css('box-shadow', $.value);
        break;
      }
      case 'f': {
        $('#black-key-b-4').css('box-shadow', $.value);
        break;
      }
      //================================= tone 3 ==============================
      //key Q
      case 'q': {
        var audio = new Audio('./assets/c3/Piano.ff.C3.mp3');
        audio.play();
        break;
      }
      //key W
      case 'w': {
        var audio = new Audio('./assets/c3/Piano.ff.D3.mp3');
        audio.play();
        break;
      }
      //key E
      case 'e': {
        var audio = new Audio('./assets/c3/Piano.ff.E3.mp3');
        audio.play();
        break;
      }
      //key R
      case 'r': {
        var audio = new Audio('./assets/c3/Piano.ff.F3.mp3');
        audio.play();
        break;
      }
      //key T
      case 't': {
        var audio = new Audio('./assets/c3/Piano.ff.G3.mp3');
        audio.play();
        break;
      }
      //key Y
      case 'y': {
        var audio = new Audio('./assets/c3/Piano.ff.A3.mp3');
        audio.play();
        break;
      }
      //key U
      case 'u': {
        var audio = new Audio('./assets/c3/Piano.ff.B3.mp3');
        audio.play();
        break;
      }
      //key 2
      case '2': {
        var audio = new Audio('./assets/c3/Piano.ff.Db3.mp3');
        audio.play();
        break;
      }
      //key 3
      case '3': {
        var audio = new Audio('./assets/c3/Piano.ff.Eb3.mp3');
        audio.play();
        break;
      }
      //key 5
      case '5': {
        var audio = new Audio('./assets/c3/Piano.ff.Gb3-error.mp3');
        audio.play();
        break;
      }
      //key 6
      case '6': {
        var audio = new Audio('./assets/c3/Piano.ff.Ab3.mp3');
        audio.play();
        break;
      }
      //key 7
      case '7': {
        var audio = new Audio('./assets/c3/Piano.ff.Bb3.mp3');
        audio.play();
        break;
      }
      // ============================================ tone 5 ===========================================
      //key B
      case 'b': {
        var audio = new Audio('./assets/c5/Piano.ff.C5.mp3');
        audio.play();
        break;
      }
      //key N
      case 'n': {
        var audio = new Audio('./assets/c5/Piano.ff.D5.mp3');
        audio.play();
        break;
      }
      //key M
      case 'm': {
        var audio = new Audio('./assets/c5/Piano.ff.E5.mp3');
        audio.play();
        break;
      }
      //key ,
      case ',': {
        var audio = new Audio('./assets/c5/Piano.ff.F5.mp3');
        audio.play();
        break;
      }
      //key .
      case '.': {
        var audio = new Audio('./assets/c5/Piano.ff.G5.mp3');
        audio.play();
        break;
      }
      //key /
      case '/': {
        var audio = new Audio('./assets/c5/Piano.ff.A5.mp3');
        audio.play();
        break;
      }
      //key \
      case '\\': {
        // Âm thanh bị nhiễu
        var audio = new Audio('./assets/c5/Piano.ff.B5.mp3');
        audio.play();
        break;
      }
      //key H
      case 'h': {
        var audio = new Audio('./assets/c5/Piano.ff.Db5.mp3');
        audio.play();
        break;
      }
      //key J
      case 'j': {
        var audio = new Audio('./assets/c5/Piano.ff.Eb5.mp3');
        audio.play();
        break;
      }
      //key L
      case 'l': {
        var audio = new Audio('./assets/c5/Piano.ff.Gb5.mp3');
        audio.play();
        break;
      }
      //key ;
      case ';': {
        var audio = new Audio('./assets/c5/Piano.ff.Ab5.mp3');
        audio.play();
        break;
      }
      //key '
      case "'": {
        var audio = new Audio('./assets/c5/Piano.ff.Bb5.mp3');
        audio.play();
        break;
      }

      default: {
      }
    }
  });
  //set the normal key
  $(window).keyup(function (e) {
    switch (e.originalEvent.key) {
      case 'v': {
        $('#white-key-c4').css('box-shadow', 'none');
        break;
      }
      case 'i': {
        $('#white-key-d4').css('box-shadow', 'none');
        break;
      }
      case '9': {
        $('#black-key-d-4').css('box-shadow', 'none');
        break;
      }
      case 'o': {
        $('#white-key-e4').css('box-shadow', 'none');
        break;
      }
      case '0': {
        $('#white-key-f4').css('box-shadow', 'none');
        break;
      }
      case 'p': {
        $('#black-key-e-4').css('box-shadow', 'none');
        break;
      }
      case 'z': {
        $('#white-key-g4').css('box-shadow', 'none');
        break;
      }
      case 's': {
        $('#black-key-g-4').css('box-shadow', 'none');
        break;
      }
      case 'x': {
        $('#white-key-a4').css('box-shadow', 'none');
        break;
      }
      case 'd': {
        $('#black-key-a-4').css('box-shadow', 'none');
        break;
      }
      case 'c': {
        $('#white-key-b4').css('box-shadow', 'none');
        break;
      }
      case 'f': {
        $('#black-key-b-4').css('box-shadow', 'none');
        break;
      }
    }
  });
});
