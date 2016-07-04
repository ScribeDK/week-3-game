	var List = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var wordList = ["SUPERWORDTEST"];
	var wordLength = [];
	var wordChosen = wordList[Math.floor(Math.random() * wordList.length)];
	var outList = [];

	
	function nameMaker (x){
		var y = x.toUpperCase().charAt(0);
		for(i in x){
		if (i > 0){
		y = y + x.toLowerCase().charAt(i);
		}}
		console.log(y);
		}
	
	for (i in wordChosen){
		wordLength.push("<span class='answer'>_</span>");
	}
	
	function outputAns(){
		var Answer = ("");
		for(a in wordLength)
		{
			Answer = Answer + wordLength[a];
		}
	document.querySelector('.Wordbox').innerHTML = ("<br><br><br>" + Answer);}	
	
	for(e in List){
	outList[e] = ("<span class='boxLetter'>" + List[e] + "</span>");} 
	
	function output(){
		var x = 1;
		var write = ("");
		for(i in outList){
			write = write + outList[i];
			if (1 == i/4){
			x = x + 1;
			write = (write + "<br>");
		}
		else if (x == i/5){
			x = x + 1;
			write = write + "<br>";
		}}
	
	document.querySelector('.Letters').innerHTML = ("<br>" + write);
	}
	
	output();
	outputAns();
	
	document.onkeyup = function (event) {
	
		var userInput = String.fromCharCode(event.keyCode).toUpperCase();
		var wordCheck = false;
		for(x in wordChosen)
		if(userInput == wordChosen[x]){
		wordLength[x] = ("<span class='answer'>"+ wordChosen[x] +"</span>");
		var wordCheck = true;
		}
		for(e in List){		
			if(userInput == List[e]){
				if (wordCheck == false){
					outList[e] = ("<span class='boxLetter negLetter'>" + userInput + "</span>");}
				else{outList[e] = ("<span class='boxLetter posLetter'>" + userInput + "</span>");}
			}
		}
	
	output();
	outputAns();
	}