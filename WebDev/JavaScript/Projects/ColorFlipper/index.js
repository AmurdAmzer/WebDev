const greenButton = document.getElementById('Green');
const blueButton = document.getElementById('Blue');
const redButton = document.getElementById('Red');

greenButton.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'green';
});

blueButton.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'blue';
});

redButton.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'red';
});