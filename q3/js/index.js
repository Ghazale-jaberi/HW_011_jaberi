
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const page3 = document.querySelector("#page3");
const move = document.querySelector(".move");
const containerOne = document.getElementById('one');
const containerTwo = document.getElementById('two');

signUpButton.addEventListener('click', () => {
    containerOne.style.display = 'none';
    containerTwo.style.display = 'flex';
    
});

signInButton.addEventListener('click', () => {
    containerTwo.style.display = 'none';
    containerOne.style.display = 'flex';
});






