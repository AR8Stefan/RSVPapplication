const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
	const li = document.createElement('li');

	const span = document.createElement('span');
	// Displays the value(name) typed in input field into the li.
	span.textContent = text;
	li.appendChild(span);  


	// Create a label to say if confirmed or not..
	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	// Creates a checkbox for confirming
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);

	// Creates a button to EDIT name in the list.
	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	li.appendChild(editButton);

	// Creates a Button to Remove item from the list
	const removeButton = document.createElement('button');
	removeButton.textContent = 'Remove';
	li.appendChild(removeButton);
	// Using the same name for both buttons produces an error. make sure to have differnt names.

	// Returns 'li' to the handler - because JS functions are undefined by defualt.
	return li;
};

form.addEventListener('submit', (e) => {
	// Prevents Default behaviour of 'Submit' event.
	e.preventDefault();
	const text = input.value;
	// Clears input field after submitting.
	input.value = '';

	const li = createLI(text);

	ul.appendChild(li)
});

ul.addEventListener('change', (e) => {
	const checkbox = event.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;

	if (checked) {
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});

ul.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const button = e.target;
		const li = button.parentNode;
		const ul = li.parentNode;
		if (button.textContent === 'Remove') {
			ul.removeChild(li);
			// The next ELSE IF statements edit and save a name on the list.
		} else if (button.textContent === 'Edit') {
			const span = li.firstElementChild;
			const input = document.createElement('input');
			input.type = 'text';
			input.value = span.textContent;
			li.insertBefore(input, span);
			li.removeChild(span);
			button.textContent = 'Save';
		} else if (button.textContent === 'Save') {
			const input = li.firstElementChild;
			const span = document.createElement('span');
			// input.type = 'text';
			span.textContent = input.value;
			li.insertBefore(span, input);
			li.removeChild(input);
			button.textContent = 'Edit';
		}
	}
});




















