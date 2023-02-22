// Get references to the buttons
const colorButton = document.querySelector('#color');
const placeButton = document.querySelector('#place');
const ritualButton = document.querySelector('#ritual');

// Add event listeners to each button
colorButton.addEventListener('click', function() {
  alert('My favorite color is blue!');
});

placeButton.addEventListener('click', function() {
  alert('My favorite place is the beach!');
});

ritualButton.addEventListener('click', function() {
  alert('My favorite ritual is reading before bed!');
});
