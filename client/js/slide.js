var slideIndice = 1;

setTimeout(() => {
  verSlides(slideIndice);
}, 300);

// Next/previous controls
function plusSlides(n) {
  verSlides(slideIndice += n);
}

// Thumbnail image controls
function currentSlide(n) {
  verSlides(slideIndice = n);
}

function verSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imagens_view");
  var dots = document.getElementsByClassName("demonstrar");
  var captionText = document.getElementById("caption_get");

  if (n > slides.length) {slideIndice = 1}
  if (n < 1) {slideIndice = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndice-1].style.display = "block";
  dots[slideIndice-1].className += " active";
  captionText.innerHTML = dots[slideIndice-1].alt;
}