// Template file
// Author: Fedor

var element = document.getElementById('navlogo');
var bodyRect = document.body.getBoundingClientRect();
    elemRect = element.getBoundingClientRect();
    offset   = elemRect.top - bodyRect.top;

document.onscroll = function(){
	if (window.pageYOffset > (offset - 8)) {
		console.log("hamster");
		document.getElementById('navlogo').classList.add("showlogo");
	} else {
		document.getElementById('navlogo').classList.remove("showlogo");
	}
};

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
      // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

document.getElementsByClassName('menutoggle')[0].onclick = function () {
  var menu = document.getElementById('menu');
  var menuback = document.getElementById('menuback');
  if(menu.className == "active"){
    menu.className = "inactive";
    menuback.className = "hide";
  } else {
    menu.className = "active";
    menuback.className = "show";
  }
}

document.getElementById('menuback').onclick = function () {
  var menu = document.getElementById('menu');
  var menuback = document.getElementById('menuback');
  if(menu.className == "active"){
    menu.className = "inactive";
    menuback.className = "hide";
  } else {
    menu.className = "active";
    menuback.className = "show";
  }
}

document.getElementById('menuclose').onclick = function () {
  var menu = document.getElementById('menu');
  var menuback = document.getElementById('menuback');
  if(menu.className == "active"){
    menu.className = "inactive";
    menuback.className = "hide";
  } else {
    menu.className = "active";
    menuback.className = "show";
  }
}