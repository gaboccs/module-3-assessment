console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for contacting us! We will get back to you soon.');
}

const form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

function giveCompliment() {
  alert("You're looking great today!");
}

const catImage = document.querySelector('#cat-image');
catImage.addEventListener('mouseover', giveCompliment);


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);