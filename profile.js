
var video = document.getElementById("video");
var body = document.querySelector("body");
var duration = video.duration;

let cnt = 0;
let zone = document.getElementById("zone");
let footer = document.getElementById("footer");

/*video.addEventListener("ended", function(){
    console.log(video.currentTime);
    video.currentTime = 0;
    video.play();
})*/

function playLoop(){
    var interval = setInterval(loop,36000)
}

function loop(){
    video.play();
    video.currentTime = 0;
}

window.onload = playLoop();



$(window).on('scroll', function(){
  var top_bottom = $(window).height();
  if(top_bottom <800){
    if($(window).scrollTop() > 400){
    $("#footer").addClass("footer-fixed");
    $("#zone").addClass("zone");
  }else{
    $("#footer").removeClass("footer-fixed");
    $("#footer").removeClass("footer-down");
    $("#zone").removeClass("zone");
  }
  }else{
    let turn = top_bottom + 100;
    if($(window).scrollTop() > turn){
      $("#footer").addClass("footer-fixed");
      $("#zone").addClass("zone");
    }else{
      $("#footer").removeClass("footer-fixed");
      $("#footer").removeClass("footer-down");
      $("#zone").removeClass("zone");
  }
  }
});

$(window).trigger("scroll");

$("#zone").on('touchstart', function(e){
  if(cnt==0){
    cnt++;
    setTimeout(function(){
      cnt = 0;
    }, 400);
  }else{
    e.preventDefault();
    footer.classList.toggle("footer-down");
  }
})



const loading = document.querySelector( '.loading' );
 
video.addEventListener( 'canplay', () => {
  loading.classList.add( 'hide' );
}, false );