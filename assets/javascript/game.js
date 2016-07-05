	var List = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var wordList = ["GRIFFIN","PHOENIX","SPHINX","MANTICORE","WYVERN","TRITON","DRAKE","ROC"];
	var wordLength = [];
	var outList = [];
	var guessCount = 1;
	var letterCount = 1;
	var newGame = true;
	var wordChosen = ("");
	var letterCheck = [""];
	var winWord = [];
	var indexNumber = 0;

	
	function startGame(){
	
	indexNumber = Math.floor(Math.random() * wordList.length);
	wordChosen = wordList[indexNumber];
	
	for (i in wordChosen){
		wordLength.push("<span class='answer'>_</span>");
		winWord.push("_");
	}
	
	for(x in wordChosen){
		var check = false;
		for(t in letterCheck){
		if (wordChosen[x] == letterCheck[t]){
			var check = true;
		}}
		if(check == false){
		letterCheck.push(wordChosen[x])
		}
		
	letterCount = letterCheck.length;
	
	guessCount = 1 + letterCount/2;
	
	for(e in List){
	outList[e] = ("<span class='boxLetter'>" + List[e] + "</span>");}
	
	newGame = false;
	}}

	
	function outputAns(){
		var Answer = ("");
		for(a in wordLength)
		{
			Answer = Answer + wordLength[a];
		}
	document.querySelector('.Wordbox').innerHTML = ("<br><br><br>" + Answer + "<br> Remaining Guesses: " + guessCount);}	
	
	 	
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
	
	
	startGame();
	output();
	outputAns();
	
	document.onkeyup = function (event) {
		if(guessCount > 0){
		var userInput = String.fromCharCode(event.keyCode).toUpperCase();
		var wordCheck = false;
		for(x in wordChosen){
		if(userInput == wordChosen[x]){
		wordLength[x] = ("<span class='answer'>"+ wordChosen[x] +"</span>");
		winWord[x] = (userInput);
		console.log(userInput);
		console.log(winWord);
		var wordCheck = true;
		}}
		for(e in List){		
			if(userInput == List[e]){
				if (wordCheck == false){
					outList[e] = ("<span class='boxLetter negLetter'>" + userInput + "</span>");
					guessCount = guessCount - 1;}
				else{outList[e] = ("<span class='boxLetter posLetter'>" + userInput + "</span>");}
			}
		}}
		else{guessCount = -1;}
	
	if(guessCount < 0){
		newGame = confirm('Play again?');
		guessCount = 0;
	}

	var win = false;
	var winString = (wordList[indexNumber]);
	for(e in winString){
		if (winString[e] == winWord[e])
		{win = true;}
		else{win = false;
			break;}
	}
	

	console.log(win);
	
	if (win == true)
		{guessCount = 0;
		alert('You win press anykey to play another game.');
		winWord = [];
		}
	
	if (newGame == true)
	{wordLength = [];
	winWord = [];
	startGame();
	}
	
	output();
	outputAns();
	}