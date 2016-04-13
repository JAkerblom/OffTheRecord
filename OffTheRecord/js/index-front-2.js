var vid = document.getElementById("bgvid");
var form = $('.form');
var form_container = $('.form-container');
var register_button = document.getElementById("register_button");
var audio_loop = new Audio('sound/otr-music-loop.m4a');
var audio_end = new Audio('sound/otr-music-end.m4a');

// Loopar introlåt
audio_loop.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio_loop.play();


//Kör mellan video (Loopad)
function run(){
    vid.setAttribute("loop","");
    vid.src = "mov/otr-middle.mp4";
    vid.load();
    vid.play();
    register_button.setAttribute("display", "block");
};

//Pausar startlåt, Kör slutvideo & slutlåt
function runEnd(){
  audio_loop.pause();
  audio_end.play();
  form_container.fadeOut();
  setTimeout(function(){
    vid.removeAttribute("loop");
    vid.src = "mov/otr-end.mp4";
    vid.load();
    vid.play();
    vid.onended = function() {
      vid.remove();
    };
  }, 500);
};





setTimeout(function(){
    vid.play();
}, 800);



//delay på formulär
setTimeout(function(){
  form_container.fadeIn(1200)}, 3000);
