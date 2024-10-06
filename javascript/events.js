const paragraph = document.getElementById('hoverParagraph');

paragraph.addEventListener('mouseover', function () {
	console.log('Paragraph was hovered');
});

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	console.log('form submitted');

	//3.

	var p = document.querySelector('p');
	p.innerText = inp.value;
});

//HOMEWORK
//update name  input field , update bio input field - web developer , update profile picture url - add image then update on the same time
