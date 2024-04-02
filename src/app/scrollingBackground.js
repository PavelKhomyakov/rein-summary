// scrollingBackground.js
export function setupScrollingBackground() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.png'];
    let currentImageIndex = 0;
    const fadeThreshold = 0.8; // Adjust this value to change when the image starts fading out
  
    return (scrollPosition, maxScroll) => {
      const background = document.querySelector('.background-container');
      const viewportHeight = window.innerHeight;
  
      // Calculate the height of the background container based on viewport height
      const containerHeight = Math.min(viewportHeight, maxScroll - scrollPosition);
      background.style.height = `${containerHeight}px`;
  
      // Calculate the current image index based on scroll position
      let newImageIndex = 0;
      if (maxScroll > 0) {
        newImageIndex = Math.min(Math.floor((scrollPosition / maxScroll) * images.length), images.length - 1);
      }
  
      if (newImageIndex !== currentImageIndex) {
        currentImageIndex = newImageIndex;
        const imageUrl = `/${images[currentImageIndex]}`;
        background.style.backgroundImage = `url(${imageUrl})`;
        background.style.opacity = 1; // Reset opacity when changing images
      }
  
      // Reset background image when scroll position is at the top
      if (scrollPosition === 0) {
        currentImageIndex = 0;
        const imageUrl = `/${images[currentImageIndex]}`;
        background.style.backgroundImage = `url(${imageUrl})`;
        background.style.opacity = '1'; // Reset opacity when changing images
      }
  
      // Fade out the background image when reaching the fade threshold
      if (scrollPosition > fadeThreshold * maxScroll) {
        const opacity = Math.max(0, 1 - ((scrollPosition - (fadeThreshold * maxScroll)) / (fadeThreshold * maxScroll)));
        background.style.opacity = opacity.toString();
      } else {
        background.style.opacity = '1';
      }
    };
  }
  