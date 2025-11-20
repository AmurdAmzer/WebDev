
function calculateAverage(scores){
// TODO: Calculate the average of all numbers in the array
const scores = [];
let sum = 0;
for (let i=0; i<scores.length; i++){
    sum = sum + scores[i];

}

const average = sum/scores.length;
return average;
}

// Test it
console.log(calculateAverage([80, 90, 85])); // Should print 85

const addScoreButton = document.getElementById('addScoreBtn');
const averageButton = documnet.getElementById('averageBtn');

addScoreButton.addEventListener('click', function(e){

})
