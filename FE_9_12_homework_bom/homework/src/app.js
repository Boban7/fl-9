const main = document.getElementById('main');
const add = document.getElementById('add');
const modify = document.getElementById('modify');

const buttonAdd = document.getElementById('buttonAdd');
const emptyComment = document.getElementById('emptyComment');
const parentUl = document.getElementById('parentUl');

const newInput = document.getElementById('newInput');
const newSubmit = document.getElementById('newSubmit');

const modifyInput = document.getElementById('modifyInput');
const modifySubmit = document.getElementById('modifySubmit');

const idexFirstItemOfArray = 0;

let TodoItems = [];
let id = 1;
let idToModify = null;
let itemToModify = null;

// listen new submit
newSubmit.addEventListener('click', addingNewItem);
newSubmit.addEventListener('click', addToLocalStorage);

modifySubmit.addEventListener('click', modifyFunction);

function addingNewItem() {
	if(emptyComment) {
		emptyComment.remove();
	}
	if(newInput.value && newInput.value !== null) {
		renderSomeItem(newInput.value);
		newInput.value = '';
	}
}

function renderSomeItem(itemText, idLi = id, isDone = false) {
	const li = document.createElement('LI');
	const imgToDo = document.createElement('IMG');
	const span = document.createElement('SPAN');
	const textNode = document.createTextNode(itemText);
	const imgDelete = document.createElement('IMG');

	// add attribute to nodes
	li.setAttribute('id', idLi);
	if(isDone) {
		imgToDo.setAttribute('src','assets/img/done-s.png');
		imgToDo.setAttribute('alt','done');
	} else {
		imgToDo.setAttribute('src','assets/img/todo-s.png');
		imgToDo.setAttribute('alt','todo');
		imgToDo.addEventListener('mousedown', done);
		span.addEventListener('click', goToModify);
	}
	imgDelete.setAttribute('src','assets/img/remove-s.jpg');
	imgDelete.setAttribute('alt','remove');

	// add listener to image-button
	imgDelete.addEventListener('mousedown', deleteItem);

	const readyLi = parentUl.appendChild(li);
	readyLi.appendChild(imgToDo);
	readyLi.appendChild(span).appendChild(textNode);
	readyLi.appendChild(imgDelete);

	if(isDone) {
		moveDown(readyLi);
	} else {
		moveUp(readyLi);
	}
}

function renderItemFromObject(obj) {
	renderSomeItem(obj.description, obj.id, obj.isDone);
}

function addToLocalStorage() {
	if(newInput.value && newInput.value !== null) {
		TodoItems.push({
			'id': id,
			'description': newInput.value,
			'isDone' : false
		});
		localStorage.setItem('TodoItems', JSON.stringify(TodoItems));
		id++;
	}
}

function loadItemFromLocalStorage() {
	const jsonTodoItems = JSON.parse(localStorage.getItem('TodoItems'));

	if(jsonTodoItems[idexFirstItemOfArray] === undefined) {
		return;
	}
	emptyComment.remove();
	TodoItems = jsonTodoItems;
	TodoItems.forEach(renderItemFromObject);
	id = TodoItems[TodoItems.length - 1].id + 1;
}

function deleteItem(e) {
	// remove from local storage
	const idItemToDelete = Number(e.target.parentNode.id);

	TodoItems.forEach((item, index) => {
		if(item.id === idItemToDelete) {
			TodoItems.splice(index, 1);
		}
	});
	localStorage.setItem('TodoItems', JSON.stringify(TodoItems));

	// remove from document
	e.target.parentNode.remove();
}

function done(e) {
	// check done in local storage
	const li = e.target.parentNode;
	const idItemToDone = Number(e.target.parentNode.id);

	TodoItems.forEach((item, index) => {
		if(item.id === idItemToDone) {
			TodoItems[index].isDone = true;
		}
	});
	localStorage.setItem('TodoItems', JSON.stringify(TodoItems));

	// check done in document
	e.target.setAttribute('src', 'assets/img/done-s.png');
	e.target.removeEventListener('mousedown', done);

	moveDown(li);
}

// move done down
function moveDown(li) {
	const ul = li.parentNode;

	ul.insertBefore(li, ul.lastChild);
	ul.insertBefore(ul.lastChild, li);
}
// move todo up
function moveUp(li) {
	const ul = li.parentNode;

	ul.insertBefore(li, ul.firstChild);
}

// modify
function modifyFunction() {
	const numberIdToModifi = Number(idToModify);
	//modify in document
	itemToModify.innerHTML = modifyInput.value;

	//modify in local storage
	TodoItems.forEach((item, index) => {
		if(item.id === numberIdToModifi) {
			TodoItems[index].description = modifyInput.value;
		}
	});
	localStorage.setItem('TodoItems', JSON.stringify(TodoItems));
}

/*--------- hash --------------*/
function hide(page) {
	page.classList.add('hide');
}
function show(page) {
	page.classList.remove('hide');
}
function change(pageToHide, pageToShow) {
	hide(pageToHide);
	show(pageToShow);
}

// get hash from URL
function getHashFromUrl(url) {
	return String(url).slice(String(url).search('#') + 1);
}
// hide addPage & modifyPage on start
hide(add);
hide(modify);
//set start hash to 'main'
window.location.hash = 'main';
//listen button Add
buttonAdd.addEventListener('click', () => {
	window.location.hash = 'add';
})

//view modify form
function goToModify(e) {
	const span = e.target;

	window.location.hash = 'modify';
	modifyInput.value = span.innerHTML;
	itemToModify = span;
	idToModify = span.parentNode.id;
}

// listen buttons for change hash to 'main'
listenButtonsForChangeHashToMain();
function listenButtonsForChangeHashToMain() {
	const buttonsId = [
		'newSubmit',
		'newCancel',
		'modifySubmit',
		'modifyCancel'
	];

	buttonsId.forEach((id) => {
		const button = document.getElementById(id);
		button.addEventListener('click', () => {
			window.location.hash = 'main';
		})
	})
}

// listen hash change
window.addEventListener('hashchange', (e) => {
	change(document.getElementById(getHashFromUrl(e.oldURL)), document.getElementById(getHashFromUrl(e.newURL)));
});
