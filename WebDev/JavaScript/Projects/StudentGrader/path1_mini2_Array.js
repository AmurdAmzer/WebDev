
// Create an empty array to store all scores entered by the user
const scores = [];

// Function that accepts an array of numbers and returns the average
function calculateAverage(scores){

    // Loop  through the from index 0 to the end of the array and calculate the sum of all scores
    let sum = 0;
    for (let i=0; i<scores.length; i++){
        sum = sum + scores[i];

}
    // Calculate the average by dividing the sum by the number of scores and return it.
    const average = sum/scores.length;
    return average;
}

// Test it
console.log(calculateAverage([80, 90, 85])); // Should print 85

// Get references to the buttons (Grab the buttons by their IDs)
const addScoreButton = document.getElementById('addScoreBtn');
const averageButton = document.getElementById('averageBtn');
const clearButton = document.getElementById('clearBtn');
const gradeButton = document.getElementById('gradeBtn');


// When addScoreButton is clicked, get the score from the input field and add it to the scores array
addScoreButton.addEventListener('click', function(e){

    //Get value from the input field with id 'score' and convert it to a number
    const value = Number(document.getElementById('score').value);
    
    // Add (push) the score to the global scores array
    scores.push(value);

    // Update the scores list in the HTML to show all entered scores
    const scoreList = document.getElementById('scoreList').textContent = "scores: [" + scores.join(', ') +"]";

    // Clear the input after adding a score
    document.getElementById('score').value='';

});

averageButton.addEventListener('click', function(){
    
    // TODO: Get all scores from the scores array

    // Console log to verify button click
    console.log("Average Button Clicked!");


    // Call our function (calculateAverage) and pass in the scores array to get the average
    const average = calculateAverage(scores);


    // Show the result in an alert (popup) 
    // alert("Your average score is: " + average);

    
    // Show the result on the page
    document.getElementById('result').textContent = "Average Score: "
 + average;


});

// Clear sscores list
clearButton.addEventListener('click', function(){
    console.log("Clear Button Clicked!");

    // 1.  Clear the scores array
    scores.length = 0; // Clear the scores array

    // 2. Clear the score list display
    document.getElementById('scoreList').textContent = "Scores: [ ]";

    // 3. Clear the result display
    document.getElementById('result').textContent = "Average Score: ";

    // 4. Clear the input field
    document.getElementById('score').value='';
});