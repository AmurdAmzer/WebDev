// Task: Make this work
function calculateAverage(num1, num2, num3) {
    // TODO: Calculate and return average
    const average = (num1 + num2 + num3) / 3;
    return average
  }
  
  // Test it
  console.log(calculateAverage(80, 90, 85)); // Should print 85

  // TODO: Add event listener to button
  
  const button = document.getElementById('averagebtn');

  button.addEventListener('click', function() {
    console.log("Button clicked!");

    // Get values from input fields
    const score1 = Number(document.getElementById('num1').value)
    const score2 = Number(document.getElementById('num2').value)
    const score3 = Number(document.getElementById('num3').value)

    const average = calculateAverage(score1, score2, score3);

    alert("Your average score is: " + average);

  });