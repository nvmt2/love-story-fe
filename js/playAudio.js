// create box-shadow effect
$.value = '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
$(document).ready(function () {
  $(window).keypress(function (e) {
    // get key pressed by user
    let keyPressed = e.originalEvent.key;

    for (let item of storeTone) {
      if (item.key === keyPressed) {
        // Look for corresponding audio
        let myAudio = new Audio(item.path);
        // run audio
        myAudio.play();
        //set shadow the key
        $(item.id).css('box-shadow', $.value);
        break;
      }
    }
  });
  //set the normal key
  $(window).keyup(function (e) {
    // get key pressed by user
    let keyPressed = e.originalEvent.key;

    for (let item of storeTone) {
      if (item.key === keyPressed) {
        // turn off box-shadow effect
        $(item.id).css('box-shadow', 'none');
        break;
      }
    }
  });
});
