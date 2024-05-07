export function setupScrollingBackground() {
  const images = [
    'IMG01.png', 'IMG02.png', 'IMG03.png', 'IMG04.png', 'IMG05.png', 'IMG06.png', 'IMG07.png', 'IMG08.png', 'IMG09.png', 'IMG10.png',
    'IMG11.png', 'IMG12.png', 'IMG13.png', 'IMG14.png', 'IMG15.png', 'IMG16.png', 'IMG17.png', 'IMG18.png', 'IMG19.png', 'IMG20.png',
    'IMG21.png', 'IMG22.png', 'IMG23.png', 'IMG24.png', 'IMG25.png', 'IMG27.png', 'IMG28.png', 'IMG29.png', 'IMG30.png',
    'IMG31.png', 'IMG32.png', 'IMG33.png', 'IMG34.png', 'IMG35.png', 'IMG36.png', 'IMG37.png', 'IMG38.png', 'IMG39.png', 'IMG40.png',
    'IMG41.png', 'IMG42.png', 'IMG43.png', 'IMG44.png', 'IMG45.png', 'IMG46.png', 'IMG47.png', 'IMG48.png', 'IMG49.png', 'IMG50.png',
    'IMG51.png', 'IMG52.png', 'IMG53.png', 'IMG54.png', 'IMG55.png', 'IMG56.png', 'IMG57.png', 'IMG58.png', 'IMG59.png', 'IMG60.png',
    'IMG61.png', 'IMG62.png', 'IMG63.png', 'IMG64.png', 'IMG65.png', 'IMG66.png', 'IMG67.png', 'IMG68.png', 'IMG69.png', 'IMG70.png',
    'IMG71.png', 'IMG72.png', 'IMG73.png', 'IMG74.png', 'IMG75.png', 'IMG76.png', 'IMG77.png', 'IMG78.png', 'IMG79.png', 'IMG80.png',
    'IMG81.png', 'IMG82.png', 'IMG83.png', 'IMG84.png', 'IMG85.png', 'IMG86.png', 'IMG87.png', 'IMG88.png', 'LOGO.png', 'IMG90.png',
    'IMG91.png', 'IMG92.png', 'IMG93.png', 'IMG94.png'
  ]; //cut off IMG26, changed IMG89 to LOGO

  const numImages = images.length;

  return (scrollPosition, maxScroll) => {
    const background = document.querySelector('.background-container');

    // Calculate the current image index based on scroll position
    let percentage = Math.min(scrollPosition / maxScroll, 1);
    percentage = Math.max(percentage, 0); // Ensure percentage is at least 0
    const currentImageIndex = Math.floor(percentage * (numImages - 1)); // Subtract 1 to handle the last image at the very bottom

    // Set the background image using a CSS class
    const currentImage = `url(images/${images[currentImageIndex]})`;
    if (currentImage && background.style.backgroundImage !== currentImage) {
      background.classList.add('fade-in');
      setTimeout(() => {
        background.classList.remove('fade-in');
        background.style.backgroundImage = currentImage;
        background.style.transition = 'background-image 0.5s linear';
      }, 100); // Transition duration
    }
  };
}
