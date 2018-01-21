quiz = {
	"name" : "Super Hero Name Quiz", 
	"description": "How many super hereos can you name?", 
	"question": "What is the real name of ",
	"questions": [
	{"question" : "Superman", "answer" : "Clarke Kent"},
	{"question" : "Batman", "answer" :  "Bruce Wayne"},
	{"question" : "Wonder Woman", "answer" : "Dianna Prince"}
	]
}

var score = 0 // initialize score

play(quiz);

function play(quiz) {
	//main game loop
	for(i=0, question, answer, max=quiz.questions.length; i <max; i++){
		var question = quiz.questions[i].question;
		var answer = ask(question);
		check(answer);
	}
	//end of game loop
	gameOver();


	function ask(question) {
		return prompt(quiz.question + question); // quiz[i][0] is the i'th question
	}

	function check(answer){
		if(answer === quiz.questions[i].answer) {
			alert("Correct!");
			score ++
		} else {
			alert("Wrong!")
		}
	}
	
	function gameOver(){
		//inform the player that the game has finished and tell
		//how many points scored
		alert("Game over, your score is " + score + " points");
	}
}