
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


let closeButton1 = document.getElementById("close-button-1");
let openButton1 = document.getElementById("open-button-1");
let closeButton2 = document.getElementById("close-button-2");
let openButton2 = document.getElementById("open-button-2");
let closeButton3 = document.getElementById("close-button-3");
let openButton3 = document.getElementById("open-button-3");
let closeButton4 = document.getElementById("close-button-4");
let openButton4 = document.getElementById("open-button-4");
let closeButton5 = document.getElementById("close-button-5");
let openButton5 = document.getElementById("open-button-5");
let closeButton6 = document.getElementById("close-button-6");
let openButton6 = document.getElementById("open-button-6");
let closeButton7 = document.getElementById("close-button-7");
let openButton7 = document.getElementById("open-button-7");
var modal1 = document.getElementById("modal-1");
var modalOverlay1 = document.getElementById("modal-overlay-1");
var modal2 = document.getElementById("modal-2");
var modalOverlay2 = document.getElementById("modal-overlay-2");
var modal3 = document.getElementById("modal-3");
var modalOverlay3 = document.getElementById("modal-overlay-3");
var modal4 = document.getElementById("modal-4");
var modalOverlay4 = document.getElementById("modal-overlay-4");
var modal5 = document.getElementById("modal-5");
var modalOverlay5 = document.getElementById("modal-overlay-5");
var modal6 = document.getElementById("modal-6");
var modalOverlay6 = document.getElementById("modal-overlay-6");
var modal7 = document.getElementById("modal-7");
var modalOverlay7 = document.getElementById("modal-overlay-7");


function playLoop(){
    var interval = setInterval(loop,36000)
}

function loop(){
    video.play();
    video.currentTime = 0;
}

window.onload = playLoop();


function close(n) {
  if(this.n==1){
    modal1.classList.toggle("closed");
    modalOverlay1.classList.toggle("closed");
  }
  else if(this.n==2){
    modal2.classList.toggle("closed");
    modalOverlay2.classList.toggle("closed");
  }
  else if(this.n==3){
    modal3.classList.toggle("closed");
    modalOverlay3.classList.toggle("closed");
  }
  else if(this.n==4){
    modal4.classList.toggle("closed");
    modalOverlay4.classList.toggle("closed");
  }
  else if(this.n==5){
    modal5.classList.toggle("closed");
    modalOverlay5.classList.toggle("closed");
  }
  else if(this.n==6){
    modal6.classList.toggle("closed");
    modalOverlay6.classList.toggle("closed");
  }
  else if(this.n==7){
    modal7.classList.toggle("closed");
    modalOverlay7.classList.toggle("closed");
  }
  body.classList.toggle("hold-back");
};

//閉じるボタン
closeButton1.addEventListener("click", {n:1, handleEvent:close});
closeButton2.addEventListener("click", {n:2, handleEvent:close});
closeButton3.addEventListener("click", {n:3, handleEvent:close});
closeButton4.addEventListener("click", {n:4, handleEvent:close});
closeButton5.addEventListener("click", {n:5, handleEvent:close});
closeButton6.addEventListener("click", {n:6, handleEvent:close});
closeButton7.addEventListener("click", {n:7, handleEvent:close});

function open(n){
  body.classList.toggle("hold-back");
  if(this.n==1){
    modal1.classList.toggle("closed");
    modalOverlay1.classList.toggle("closed");
  }
  else if(this.n==2){
    modal2.classList.toggle("closed");
    modalOverlay2.classList.toggle("closed");
  }
  else if(this.n==3){
    modal3.classList.toggle("closed");
    modalOverlay3.classList.toggle("closed");
  }
  else if(this.n==4){
    modal4.classList.toggle("closed");
    modalOverlay4.classList.toggle("closed");
  }
  else if(this.n==5){
    modal5.classList.toggle("closed");
    modalOverlay5.classList.toggle("closed");
  }
  else if(this.n==6){
    modal6.classList.toggle("closed");
    modalOverlay6.classList.toggle("closed");
  }
  else if(this.n==7){
    modal7.classList.toggle("closed");
    modalOverlay7.classList.toggle("closed");
  }
};

//開くボタン
openButton1.addEventListener("click", {n:1, handleEvent:open});
openButton2.addEventListener("click", {n:2, handleEvent:open});
openButton3.addEventListener("click", {n:3, handleEvent:open});
openButton4.addEventListener("click", {n:4, handleEvent:open});
openButton5.addEventListener("click", {n:5, handleEvent:open});
openButton6.addEventListener("click", {n:6, handleEvent:open});
openButton7.addEventListener("click", {n:7, handleEvent:open});



$(window).on('scroll', function(){
  var top_bottom = $(window).height();
  if(top_bottom <992){
    if($(window).scrollTop() > 400){
    $("#footer").addClass("footer-fixed");
    $("#zone").addClass("zone");
  }else{
    $("#footer").removeClass("footer-fixed");
    $("#footer").removeClass("footer-down");
    $("#zone").removeClass("zone");
  }
  }else{
    let turn = top_bottom + 300;
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