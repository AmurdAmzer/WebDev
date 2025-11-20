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

    // Calculate Average
    const average = calculateAverage(score1, score2, score3);

    // Show result in alert
    alert("Your average score is: " + average);

    // NB: I can also do alert("Your average score is: " + calculateAverage(score1, score2, score3));
    // however, I decided to store it in a variable average so I can reuse average anytime I want to call the calculateAverage function.

    //Also, score1, score2, and score3 and the actual numbers inputted by the user in the input fields. 

    // number converts the input to number type since input values are strings by default, and store them in score1, score2, and score3 variables.
  });