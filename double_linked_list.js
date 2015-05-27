function Node(singleElement) {
	this.singleElement = singleElement;
	this.previous = null;
	this.next = null;
}

function LinkedList(){
	this.listHead = new Node("head");
	this.findInList = findInList;
	this.addToList = addToList;
	this.removeItem = removeItem;
	this.showList = showList;
	this.findLast = findLast;
	this.showReverse = showReverse;
}


function findInList(itemInList) {
	var currentNode = this.listHead;
	var counter = 0;
		while( (currentNode.singleElement !== itemInList) ) {
			previousNode =  currentNode.previous;
			currentNode = currentNode.next;
			counter += 1;
			if(currentNode === null) {
				return {singleElement: null,
					previous: {singleElement: null, previous: null, next: null},
					next: {singleElement: null, previous: null, next: null}};
			}
		}
		return currentNode;
}

function addToList(newElement, oldElement){
	var newNode = new Node(newElement);
	var currentNode = this.findInList(oldElement);
	newNode.next = currentNode.next;
	newNode.previous = currentNode;
	currentNode.next = newNode;
}


function removeItem(element){
	var currentElement = this.findInList(element);
		if(currentElement.next !== null) {
			currentElement.previous.next = currentElement.next;
			currentElement.next.previous = currentElement.previous;
			currentElement.next = null;
			currentElement.previous = null;
		}
		else {
			currentElement.previous.next = null;
			currentElement.previous = null;
		}
}

function findLast() {
	var currentNode = this.listHead;
	while (currentNode.next !== null) {
  	currentNode = currentNode.next;
  }
	return currentNode;
}


function showList(){
	var currentNode = this.listHead;
	 while(currentNode.next !== null){
		console.log(currentNode.next.singleElement);
		 currentNode = currentNode.next;
	 }
}

function showReverse() {
var currentNode = this.listHead;
currentNode = this.findLast();
while (currentNode.previous !== null) {
      console.log(currentNode.singleElement);
			currentNode = currentNode.previous;
   }
}

var bobby = new LinkedList();
bobby.addToList("joey", "head");
bobby.addToList("billy", "joey");
bobby.addToList("teddy", "billy");
bobby.addToList("jimmy", "teddy");

bobby.removeItem("jimmy");

bobby.showList();
bobby.removeItem("teddy");
bobby.showReverse();
