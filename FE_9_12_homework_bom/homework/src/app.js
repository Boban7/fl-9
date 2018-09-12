/*const rootNode = document.getElementById('root');*/

let todoItems = []; //{isDone: false, id: 12345, description: 'Todo 1'}
let id = 1;

const add = document.getElementById('add');
const modify = document.getElementById('modify');
const main = document.getElementById('main');
const buttonAdd = document.getElementById('buttonAdd');
const saveNew = document.getElementById('saveNew');
const newItem = document.getElementById('newItem');
const cancelNew = document.getElementById('cancelNew');
const cancelModify = document.getElementById('cancelModify');
const emptyComment = document.getElementById('emptyComment');


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

// render item from Local storage
function render(item, index) {
	if(id === 2) {hide(emptyComment)};
	console.log(item.description);
	let parent = document.getElementById('parent');
	let node = document.createElement('P');
	let text = document.createTextNode(item.description);
	parent.appendChild(node).appendChild(text);
}

// get hash from URL
function getHashFromUrl(url) {
	console.log(String(url).slice(String(url).search('#') + 1));
	return String(url).slice(String(url).search('#') + 1);
}

// hide addPage & modifyPage on start
hide(add);
hide(modify);

//set start hash
window.location.hash = 'main';

//listen button Add
buttonAdd.addEventListener('click', () => {
	window.location.hash = 'add';
})

// listen hash change
window.addEventListener('hashchange', (e) => {
	change(document.getElementById(getHashFromUrl(e.oldURL)), document.getElementById(getHashFromUrl(e.newURL)));
});

// listen save new item
saveNew.addEventListener('click', () => {
	todoItems.push({'isDone': false, 'id': id, 'description': newItem.value});
	id++;
	localStorage.setItem('todoItems', JSON.stringify(todoItems));

	const itemsToRender = localStorage.getItem('todoItems');
	const itemsToRenderJSON = JSON.parse(itemsToRender);

	itemsToRenderJSON.forEach(render);
});


function deleteFromLocalStorage() {
	//localStorage.removeItem('param');
}

//rootNode.appendChild(/* Append your list item node*/);
