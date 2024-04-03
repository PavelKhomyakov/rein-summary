export function setupScrollingBackground() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.png', 'image4.jpeg', 'image5.png', 'image6.png', 'image7.png'].map(image => `images/${image}`);
  const numImages = images.length;
  let currentImageIndex = 0;
  const fadeThreshold = 0.8; // Adjust this value to change when the image starts fading out

  const imageElements = images.map(imageUrl => {
    const image = new Image();
    image.src = imageUrl;
    return image;
  });

  return (scrollPosition, maxScroll) => {
    const background = document.querySelector('.background-container');
    const opacity = Math.max(0, 1 - ((scrollPosition - (fadeThreshold * maxScroll)) / (fadeThreshold * maxScroll)));
    background.style.opacity = opacity.toString();

    // Calculate the current image index based on scroll position
    const percentage = Math.min(scrollPosition / maxScroll, 1);
    currentImageIndex = Math.floor(percentage * numImages);
    
    // Set the background image
    const currentImage = imageElements[currentImageIndex];
    if (currentImage && background.style.backgroundImage !== `url(${currentImage.src})`) {
      background.style.backgroundImage = `url(${currentImage.src})`;
      background.style.transition = 'background-image 0.5s ease-in-out';
    }
  };
}
