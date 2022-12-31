let submitButton = document.querySelector('#submit-button');

function emailValidate(email) {
	return email.includes('@');
		}

function messageValidate(message) {
	return message.includes('crap');
		}


function clickListener(event) {
	event.preventDefault();
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');

let emailText = emailInput.value;
let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
		alert('The email address must contain @');
		return false;
	}
	if(messageValidate(messageText) === true) {
		alert('Watch your mouth; you\'re at work!')
		return false;
	}

	alert('Thanks for your message');
}
submitButton.addEventListener('click', clickListener);