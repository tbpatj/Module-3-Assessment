console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('The form has been submitted.');
	console.log('form submit');
}
function touchedDuck( event ){
	alert("Woah, hold up, nooooo touchy.")
}

let form = document.querySelector('form#contact');
let duckPic = document.querySelector('img#duck');

form.addEventListener('submit', handleSubmit);
duckPic.addEventListener('mouseover',touchedDuck);