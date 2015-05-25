function QueueMethod () {
	this.dataQueue = [];
	this.addToQueue = addToQueue;
	this.removeFromQueue = removeFromQueue;
	this.firstInLine = firstInLine;
	this.lastInLine = lastInLine;
	this.stringOutputQueue= stringOutputQueue;
	this.isQueueEmpty = isQueueEmpty;
	this.personPlural = personPlural;
}


function addToQueue(element) {
	this.dataQueue.push(element);
}

function removeFromQueue() {
	this.dataQueue.shift();
}

function firstInLine() {
	if(this.dataQueue.length) {
		return this.dataQueue[0];
	} else {
		return "The line is empty!";
	}
}

function lastInLine() {
	return this.dataQueue[this.dataQueue.lenth - 1];
}

function stringOutputQueue() {
	stringValue = "";
	for(var i = 0; i < this.dataQueue.length; ++i) {
		stringValue += (i+1) +". " + this.dataQueue[i] + "\n";
	}
	return stringValue;
}
	function personPlural(queueSize) {
		if(queueSize === 1) {
			return " person is in the queue.";
		}
		else {
			return " people are in the queue.";
		}
	}

function isQueueEmpty() {
	var queueLength = this.dataQueue.length;
	if(queueLength === 0) {
		console.log("There is no one in the queue.");
		return true;
	}
	else {
		personResponse = this.personPlural(queueLength);
		console.log("The Queue is not empty. " + queueLength + personResponse);
		return false;
	}

}

var bankLine = new QueueMethod();
bankLine.addToQueue("David");
console.log(bankLine.stringOutputQueue());
bankLine.addToQueue("Anne");
console.log("-----------------------------------");
console.log(bankLine.stringOutputQueue());
bankLine.addToQueue("Doris");
console.log("-----------------------------------");
console.log(bankLine.stringOutputQueue());
bankLine.isQueueEmpty();
bankLine.removeFromQueue();
bankLine.removeFromQueue();
bankLine.isQueueEmpty();
bankLine.removeFromQueue();
bankLine.isQueueEmpty();
console.log(bankLine.firstInLine());
