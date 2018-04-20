const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
	const li = document.createElement('li');
	// Displays the value(name) typed in input field into the li.
	li.textContent = text;
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
	removeButton.textContent = 'remove';
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
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});






