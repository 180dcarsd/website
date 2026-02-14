let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function autoSlides() {
  plusSlides(1); // Call plusSlides to move to the next slide
}

// Set the interval for automatic transitions (e.g., every 3000ms or 3 seconds)
setInterval(autoSlides, 35000);


const modelViewer = document.getElementById('globe');

// This function handles the 90-degree, 5-second rotation
const animateRotation = () => {
    const duration = 5000; // 5 seconds in milliseconds
    const startTime = performance.now();
    const startRotation = 0; // The initial rotation angle
    const endRotation = Math.PI / 2; // 90 degrees in radians (180 deg = PI, 360 deg = 2*PI)

    const updateRotation = (currentTime) => {
        const elapsed = currentTime - startTime;
        if (elapsed < duration) {
            const progress = elapsed / duration;
            const currentRotation = startRotation + (endRotation - startRotation) * progress;
            
            // Update the model's orientation
            modelViewer.orientation = `0deg ${currentRotation}rad 0deg`;
            
            requestAnimationFrame(updateRotation);
        } else {
            // Ensure the rotation is exactly 90 degrees at the end
            modelViewer.orientation = `0deg ${endRotation}rad 0deg`;
        }
    };
    
    requestAnimationFrame(updateRotation);
};

// Start the rotation when the model has finished loading
modelViewer.addEventListener('load', () => {
    animateRotation();
});


