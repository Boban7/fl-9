// variable
let count = 0;
let ulNode = '';
let dragSrcEl = null;
const rootNode = document.getElementById('root');
const inputAction = document.getElementById('inputAction'),
	add = document.getElementById('add');

// disabled add button on start
add.disabled = true;

// abled/disabled add button in case empty/"don't empty" input
inputAction.addEventListener('keyup', () => {
	console.log(inputAction.value);
	if(inputAction.value !== '' && inputAction.value !== null) {
		add.disabled = false;
	} else {
		add.disabled = true;
	}
})

// create new ul node
const addUl = () => {
	let ul = document.createElement('UL');

	ulNode = rootNode.appendChild(ul);

	return ulNode;
}

// create new nodes when click add button
add.addEventListener('click', () => {
	let ul = '';
	const firstRunAdd = 1;
	count++;
	if(count === firstRunAdd) {
		ul = addUl();
	} else {
		ul = ulNode;
	}
	let li = document.createElement('LI');
	let iconBox = document.createElement('I');
	let textIconBox = document.createTextNode('crop_din');
	let node = document.createElement('SPAN');
	let textNode = document.createTextNode(inputAction.value);
	let iconDelete = document.createElement('I');
	let textIconDelete = document.createTextNode('delete');
	let liCollection = document.getElementsByTagName('LI');
	const readyLi = ul.appendChild(li);
	const maxLiItem = 10;

	inputAction.value = '';
	add.disabled = true;

	iconBox.addEventListener('mousedown', (e) => {
		e.target.innerText = 'check_box';
	});
	iconDelete.addEventListener('mousedown', (e) => {
		e.target.parentElement.remove();
	});
	li.id = 'li' + count;
	iconBox.classList.add('material-icons');
	iconBox.classList.add('box');
	iconDelete.classList.add('material-icons');
	iconDelete.classList.add('delete');
	readyLi.appendChild(iconBox).appendChild(textIconBox);
	readyLi.appendChild(node).appendChild(textNode);
	readyLi.appendChild(iconDelete).appendChild(textIconDelete);

	readyLi.setAttribute('draggable', 'true');

	if(liCollection.length === maxLiItem) {
		const notification = document.createElement('P');
		const notificationText = document.createTextNode('Maximum item per list are created');

		notification.classList.add('notification');
		add.disabled = true;
		inputAction.disabled = true;
		document.getElementById('header').appendChild(notification).appendChild(notificationText);
	}
})

// don't work
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}

