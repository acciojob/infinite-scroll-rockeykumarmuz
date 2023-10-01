//your code here!
let listContainer = document.getElementById("infi-list");
let i = 0;

function addList() {
	let list = document.createElement("li");
	list.innerText = `Item ${++i}`;
	listContainer.appendChild(list);
}

for(let j=0; j<10; j++) {
	addList();
}

listContainer.addEventListener("scroll", ()=>{
	let maxHeight = listContainer.scrollHeight - listContainer.clientHeight;
	let scrollHeight = listContainer.scrollTop;

	let threshold = Math.abs(maxHeight - scrollHeight);

	if(threshold <= 5) {
		for(let j=0; j<2; j++) {
			addList();
		}
	}
})

