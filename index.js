var form = document.querySelector('.form-ctr');
var submitBtn = document.querySelector('.primary-btn');
var mailInput = form[0];

const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please provide a valid email address";





function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}


function showError(input, message) {
    mailInput.style.border='1px solid red';
	return showMessage(input, message, false);
}
function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    let emailValid = validateEmail(mailInput, EMAIL_REQUIRED, EMAIL_INVALID);
    if(emailValid){
        mailInput.style.border='1px solid rgb(194, 211, 255)';
        alert('Your form has been submitted.')
        mailInput.value='';
    }
    
})





