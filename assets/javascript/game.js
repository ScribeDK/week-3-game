	var List = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var outList = [];
	
	console.log("Test-List");
	for(r in List){
	console.log(List[r]);}
	
	
	for(e in List){
	outList[e] = ("<span class='boxLetter'>" + List[e] + "</span>");}
	
	console.log("Test-outList");
	for(r in outList){
	console.log(outList[r]);} 
	
	function output(){
	var x = 1;
	var write = "";
	for(i in outList){
	write = write + outList[i];
	if (1 == i/4){
	x = x + 1;
	write = write + "<br>";
	}
	else if (x == i/5){
	x = x + 1;
	write = write + "<br>";
	}}
	
	console.log("Test-write");
	console.log(write);
	
	document.querySelector('.Letters').innerHTML = "<br>" + write;
	}
	
	
	output();
	
	document.onkeyup = function (event) {
	
		var userInput = String.fromCharCode(event.keyCode).toUpperCase();
		for(e in List){
			if(userInput == List[e]){
			outList[e] = ("<span class='boxLetter negLetter'>" + userInput + "</span>");}
		}
		
	console.log("Test-outList-updated");
	
	output();
	}