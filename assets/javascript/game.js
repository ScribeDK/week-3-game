	var List = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var winPicture = ["<img width='436' height='550' alt='Bestiary_Griffin' src='assets/images/Bestiary_Griffin.jpg'/>","<img width='736' height='492' alt='Bestiary_Phoenix' src='assets/images/Bestiary_Phoenix.jpg'/>","<img width='436' height='550' alt='Bestiary_Sphinx' src='assets/images/Bestiary_Sphinx.jpg'/>","<img width='399' height='550' alt='Bestiary_Manticore' src='assets/images/Bestiary_Manticore.jpg'/>","<img width='800' height='533' alt='Bestiary_Wyvern' src='assets/images/Bestiary_Wyvern.jpg'/>","<img width='436' height='550' alt='Bestiary_Triton' src='assets/images/Bestiary_Triton.jpg'/>","<img width='436' height='550' alt='Bestiary_Firedrake' src='assets/images/Bestiary_Firedrake.jpg'/>","<img width='436' height='550' alt='Bestiary_Roc' src='assets/images/Bestiary_Roc.jpg'/>"];
	var wordList = ["GRIFFIN","PHOENIX","SPHINX","MANTICORE","WYVERN","TRITON","DRAKE","ROC"];
	var hangPictures = ["<img width='978' height='550' alt='HangMan0' src='assets/images/HangMan0.jpg'/>","<img width='978' height='550' alt='HangMan1' src='assets/images/HangMan1.jpg'/>","<img width='978' height='550' alt='HangMan2' src='assets/images/HangMan2.jpg'/>","<img width='978' height='550' alt='HangMan3' src='assets/images/HangMan3.jpg'/>","<img width='978' height='550' alt='HangMan4' src='assets/images/HangMan4.jpg'/>","<img width='978' height='550' alt='HangMan5' src='assets/images/HangMan5.jpg'/>","<img width='978' height='550' alt='HangMan6' src='assets/images/HangMan6.jpg'/>","<img width='978' height='550' alt='HangMan7' src='assets/images/HangMan7.jpg'/>"];
	var wordLength = [];
	var outList = [];
	var guessCount = 1;
	var letterCount = 1;
	var newGame = true;
	var wordChosen = ("");
	var letterCheck = [""];
	var winWord = [];
	var indexNumber = 0;
	var startGuess = 0;
	var lost = false;
	
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
	
	guessCount = Math.ceil(1 + letterCount/2);
	startGuess = guessCount;
	lost = false;
	
	for(e in List){
	outList[e] = ("<span class='boxLetter'>" + List[e] + "</span>");}
	document.querySelector('.HangMan').innerHTML = ("<br>" + hangPictures[0]);
	
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
		else{guessCount = -1;
		document.querySelector('.HangMan').innerHTML = ("<p>The answer was</p>" + winPicture[indexNumber] + "<br> Press anykey to play again");
		}
	
	if(guessCount < 0){
		newGame = confirm('Play again?');
		guessCount = 0;
	}

	
	if(startGuess - guessCount == 0){
		document.querySelector('.HangMan').innerHTML = ("<br>" + hangPictures[0]);
	}
	else if(guessCount == 1){
		document.querySelector('.HangMan').innerHTML = ("<br>" + hangPictures[6]);
		lost = true;
	}
	else if(lost == true && guessCount == 0){
		document.querySelector('.HangMan').innerHTML = ("<br>" + hangPictures[7]);
		alert('You lost press anykey to play another game.');
		lost = false
	}
	else if(guessCount != 0){
		document.querySelector('.HangMan').innerHTML = ("<br>" + hangPictures[Math.ceil(startGuess/guessCount)]);
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
		document.querySelector('.HangMan').innerHTML = ("<br>" + winPicture[indexNumber]);
		alert('You win press anykey to play another game.');
		winWord = [];
		lost = false;
		}
	
	if (newGame == true)
	{wordLength = [];
	winWord = [];
	letterCheck = [];
	startGame();
	}
	
	output();
	outputAns();
	}