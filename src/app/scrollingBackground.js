export function setupScrollingBackground() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.png'];
  let currentImageIndex = 0;
  const fadeThreshold = 0.8; // Adjust this value to change when the image starts fading out

  return (scrollPosition, maxScroll, isScrollingDown) => {
    const background = document.querySelector('.background-container');
    const viewportHeight = window.innerHeight;

    // Calculate the height of the background container based on viewport height
    const containerHeight = Math.min(viewportHeight, maxScroll - scrollPosition);
    background.style.height = `${containerHeight}px`;

    // Calculate the current image index based on scroll position and direction
    if (isScrollingDown) {
      currentImageIndex = Math.min(Math.floor((scrollPosition / maxScroll) * images.length), images.length - 1);
    } else {
      currentImageIndex = Math.max(Math.floor((scrollPosition / maxScroll) * images.length), 0);
    }

    const nextImageUrl = `images/${images[currentImageIndex]}`;
    const nextImage = new Image();
    nextImage.src = nextImageUrl;
    nextImage.onload = () => {
      background.style.backgroundImage = `url(${nextImageUrl})`;
      setTimeout(() => {
        background.style.opacity = 1; // Fade in the new image
      }, 50); // Delay to allow the background image to change
    };
    background.style.opacity = 0; // Start with opacity 0

    // Fade out the background image when reaching the fade threshold
    if (scrollPosition > fadeThreshold * maxScroll) {
      const opacity = Math.max(0, 1 - ((scrollPosition - (fadeThreshold * maxScroll)) / (fadeThreshold * maxScroll)));
      background.style.opacity = opacity.toString();
    } else {
      background.style.opacity = '1';
    }
  };
}
