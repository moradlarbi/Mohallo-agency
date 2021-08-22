window.onscroll = function () {
    scrollRotate();
    cheack();
};
cheack()
function scrollRotate() {
    let images = document.querySelectorAll(".dashed-circle");
    images.forEach((image) => {
        image.style.transform = "rotate(" + window.pageYOffset/28 + "deg)";
    })
    let play = document.querySelector(".shape-play");
    play.style.bottom = window.pageYOffset/5+"px"
    
}
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset 
      && (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
function cheack(){
    var btns = document.querySelectorAll(".btn")
    btns.forEach((btn) => {
        if (elementInViewport(btn)== true){
            btn.classList.add("anime")
        }
    })
}