export function setupScrollingBackground() {
  const images = ['IMG01.png', 'IMG02.png', 'IMG03.png', 'IMG04.png', 'IMG05.png', 'IMG06.png', 'IMG07.png', 'IMG08.png', 'IMG09.png', 'IMG10.png', 'IMG11.png', 'IMG12.png', 'IMG13.png'].map(image => `images/${image}`);
  const numImages = images.length;
  let currentImageIndex = 0;

  const imageElements = images.map(imageUrl => {
    const image = new Image();
    image.src = imageUrl;
    return image;
  });

  return (scrollPosition, maxScroll) => {
    const background = document.querySelector('.background-container');

    // Calculate the current image index based on scroll position
    const percentage = Math.min(scrollPosition / maxScroll, 1);
    currentImageIndex = Math.floor(percentage * numImages);

    // Set the background image
    const currentImage = imageElements[currentImageIndex];
    if (currentImage && background.style.backgroundImage !== `url(${currentImage.src})`) {
      background.style.backgroundImage = `url(${currentImage.src})`;
      background.style.transition = 'background-image 0.5s linear';
    }
  };
}
