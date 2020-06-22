$(document).ready(function() {   
    let $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $(".hamburger, #mobile_menu").toggleClass("is-active");
    });

    new WOW().init();

    let lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
  });
    
});


window.onscroll = function() {
    myFunction()
};

let header = document.getElementById("menu_bar");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

