const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profilePic = document.getElementById('profile-pic');

const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const picInput = document.getElementById('pic-input');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', function () {
	profileName.innerText = nameInput.value;

	profileBio.innerText = bioInput.value;

	profilePic.src = picInput.value;
});
