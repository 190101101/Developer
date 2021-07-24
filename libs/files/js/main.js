$(function(){
	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
 });

/*audio*/
$(function(){
  $('.play').on('click', function(){
    $('.play').toggleClass('audioactive');
  });
});

var myAudio = document.getElementById("rhapsody");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

var mycote = document.getElementById("cote");
var iscotePlaying = false;

function cotePlay() {
  iscotePlaying ? mycote.pause() : mycote.play();
};

mycote.oncoteplaying = function() {
  iscotePlaying = true;
};
mycote.oncotepause = function() {
  iscotePlaying = false;
};
