const greenButton = document.getElementById('Green');
const blueButton = document.getElementById('Blue');
const redButton = document.getElementById('Red');
const randomButton = document.getElementById('Random');

greenButton.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'green';
});

blueButton.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'blue';
});

redButton.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'red';
});

randomButton.addEventListener('click', function(e){
    console.log('Random Color Button Clicked');
    document.body.style.backgroundColor = 'yellow';
});