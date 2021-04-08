// Checkbox========
let allCheckbox = document.querySelectorAll('.checkbox input');
let allCheckboxDiv = document.querySelectorAll('.checkbox');

// checking for checked
allCheckbox.forEach((checkbox) => {
	if(checkbox.hasAttribute('checked') === true) {
		let perentDiv = checkbox.parentNode.classList;
		perentDiv.add('active');
	} 
})

// changing the checked attribute of the input and the active class of the div on click
allCheckboxDiv.forEach((checkDiv) => {
	checkDiv.addEventListener('click', () => {
		let child = checkDiv.querySelector('input')
		let checkDivClass = checkDiv.classList;
		if(child.hasAttribute('checked') === true) {
			child.removeAttribute('checked');
			checkDivClass.remove('active');
		} else {
			child.setAttribute('checked', '');
			checkDivClass.add('active');
		}
	})
})

// radiobuttons========
let allRadiobuttons = document.querySelectorAll('.radiobuttons__item input');
let allRadiobuttonsDiv = document.querySelectorAll('.radiobuttons__item');
// checking for checked
allRadiobuttons.forEach((radio) => {
	if(radio.hasAttribute('checked') === true) {
		let perentDiv = radio.parentNode.classList;
		perentDiv.add('active');
	} 
})


allRadiobuttonsDiv.forEach((RadiobuttonsDiv) => {
	RadiobuttonsDiv.addEventListener('click', () => {
		if(RadiobuttonsDiv.classList.contains('active') === true) {
			RadiobuttonsDiv.classList.remove('active');
			RadiobuttonsDiv.querySelector('input').removeAttribute('checked');
			return
		}
		let child = RadiobuttonsDiv.querySelector('input')
		for(let i = 0; i < allRadiobuttonsDiv.length; i++) {
			allRadiobuttonsDiv[i].classList.remove('active');
			allRadiobuttonsDiv[i].querySelector('input').removeAttribute('checked');
		}
		RadiobuttonsDiv.classList.add('active')
		child.setAttribute('checked', '');
	})
})