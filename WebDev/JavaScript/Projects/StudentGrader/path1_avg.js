// Task: Make this work
function calculateAverage(num1, num2, num3) {
    // TODO: Calculate and return average
    average = (num1 + num2 + num3) / 3;
    return average
  }
  
  // Test it
  console.log(calculateAverage(80, 90, 85)); // Should print 85

  // TODO: Add event listener to button
  
  const button = document.getElementById('averagebtn');

  button.addEventListener('click', function() {
    console.log("Button clicked!");
    
  });