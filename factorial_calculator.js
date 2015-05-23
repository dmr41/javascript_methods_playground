function FactorialFinder(raw_number) {
	if(raw_number === 0) {
		return 1;
	}
	else {
		return (raw_number * FactorialFinder(raw_number-1));
	}
}

var facTest = FactorialFinder(4);
console.log(facTest);
