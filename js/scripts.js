var quiz = [
	["What is Superman's real name?", "Clark Kent"],
	["What is Wonderwomen's real name?", "Dianna Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
];

var score = 0 // initialize score

play(quiz);

function play(quiz) {
	//main game loop
	for(i=0, question, answer, max=quiz.length; i <max; i++){
		var question = quiz[i][0];
		var answer = ask(question);
		check(answer);
	}
	//end of game loop
	gameOver();
	function ask(question) {
		return prompt(question); // quiz[i][0] is the i'th question
	}
	function check(answer){
		if(answer === quiz[i][1]) {
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