export function setupScrollingBackground() {
  const images = ['IMG01.png', 'IMG02.png', 'IMG03.png', 'IMG04.png', 'IMG05.png','image1.jpg', 'image2.jpg', 'image3.png', 'image4.jpeg', 'image5.png', 'image6.png', 'image7.png'].map(image => `images/${image}`);
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
