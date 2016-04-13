//var vid = document.getElementById("bgvid");
//var form = $('.form');
//var form_container = $('.form-container');
//var register_button = document.getElementById("register_button");

// Form and video elements
//var vid = $("#bg-vid");
var vid = document.getElementById("bg-vid");
var form = $('#newUserForm');
var submitButton = $("#submit");
var audio_loop = new Audio('Media/Sound/otr-music-loop.m4a');
var audio_end = new Audio('Media/Sound/otr-music-end.m4a');

// Loopar introlåt
audio_loop.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
audio_loop.volume = 0.01;
var maxVol = 0.99;
audio_loop.play();
fadeVolume(audio_loop.volume, function () {
  console.log('fade complete');
});

function fadeVolume(volume, callback) {
  var factor = 0.01,
      speed = 200;
  if (volume < maxVol) {
    setTimeout(function () {
      fadeVolume((audio_loop.volume += factor), callback);
    }, speed);
  } else {
    (typeof (callback) !== 'function') || callback();
  }
}


// Clips
var clipsPath = "Media/Clips/";
//var clips = ["otr1.mp4", "otr2.mp4", "otr3.mp4"];
var clips = ["otr-start.mp4", "otr-middle.mp4", "otr-end.mp4"];

function run() {
    vid.setAttribute("loop","");
    //vid.src = "mov/otr2.mp4";
    vid.src = clipsPath + clips[1];
    vid.load();
    vid.play();
    //register_button.setAttribute("display", "block");
    submitButton.attr("display", "block");
};

function runEnd() {
  audio_loop.pause();
  audio_end.play();
  //form_container.fadeOut();
  form.fadeOut();
  setTimeout(function(){
    vid.removeAttribute("loop");
    //vid.src = "mov/otr3.mp4";
    vid.src = clipsPath + clips[2];
    vid.load();
    vid.play();
    vid.onended = function() {
      vid.remove();
      //showSuccess();
    };
  }, 500);
};

setTimeout(function(){
  vid.play();
}, 800);

//delay på formulär
setTimeout(function(){
  //form_container.fadeIn(1200);
  form.fadeIn(1200);
}, 3000);

///----- Trash can------
//----------------------
// setTimeout(function(){
//     document.getElementById("bgvid").play();
// }, 800);
// function vidFade() {
//   vid.classList.add("stopfade");
// }
// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })
