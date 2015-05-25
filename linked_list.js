function Node(singleElement) {
	this.singleElement = singleElement;
	this.next = null;
}

function LinkedList(){
	this.listHead = new Node("head");
	this.findInList = findInList;
	this.addToList = addToList;
	this.findPreviousElement = findPreviousElement;
	this.removeItem = removeItem;
	this.showList = showList;
}


function findInList(itemInList) {
	var currentNode = this.listHead;
	while(currentNode.singleElement != itemInList) {
		currentNode = currentNode.next;
	}
	return currentNode;
}

function addToList(newElement, oldElement){

	var newNode = new Node(newElement);
	var nodeToLinkTo = this.findInList(oldElement);
	newNode.next = nodeToLinkTo.next;
	nodeToLinkTo.next = newNode;
}

function findPreviousElement(element) {
	var currentNode = this.listHead;
	while ((currentNode.next !== null) && (currentNode.next.singleElement !== element)) {
		currentNode = currentNode.next;
	}
	console.log(currentNode);
	console.log("--------")
	return currentNode;
}

function removeItem(element){
	var previousElement = this.findPreviousElement(element);
		if(previousElement !== null) {
			previousElement.next = previousElement.next.next;
		}
}

function showList(){
	var currentNode = this.listHead;

	 while(currentNode.next !== null){

			console.log(currentNode.next.singleElement);
		 currentNode = currentNode.next;
	 }
}

var bobby = new LinkedList();
bobby.addToList("joey", "head");
bobby.addToList("billy", "joey");
bobby.addToList("teddy", "billy");
bobby.addToList("jimmy", "teddy");
bobby.removeItem("jimmy");
// bobby.removeItem("billy");
console.log
console.log(bobby.findPreviousElement("teddy"));
// bobby.findPreviousElement("teddy");
// bobby.showList();
