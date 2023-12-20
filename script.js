// Get the circle element
const movingCircle = document.getElementById('moving-circle');

// Function to handle scroll event
function handleScroll() {
  // Get the total height of the page
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Get the current scroll position as a percentage of the total height
  const scrollPercentage = (window.scrollY / totalHeight);

  // Calculate the position for the circle within the limits (17 to 33 pixels)
  const circlePosition = 15 + (scrollPercentage * (35 - 15));

  // Set the position of the circle within the SVG
  movingCircle.setAttribute('cx', circlePosition);
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);
