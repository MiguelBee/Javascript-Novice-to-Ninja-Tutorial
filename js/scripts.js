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

//// dom references///
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("button"); 


///view functions///

function update(element, content, klass) {
	//checks to see if element has a p child, else creates new one
	var p  = element.firstChild || document.createElement("p");
	// makes p's content that of arguement content
	p.textContent = content;
	//appends the new child into the element
	element.appendChild(p);
	if(klass) {
		p.className = klass;
	}
}

//Event Listeners
$start.addEventListener("click", function(){
	play(quiz)
}, false);

///function definitions///

function play(quiz) {
	var score = 0 //initialized score
	update($score, score);

	//main game loop
	for(i=0, question, answer, max=quiz.questions.length; i <max; i++){
		var question = quiz.questions[i].question;
		var answer = ask(question);
		check(answer);
	}
	//end of game loop
	gameOver();


	// nested functions//

	function ask(question) {
		update($question, quiz.question + question); // quiz[i][0] is the i'th question
		return prompt("Enter Your Answer:");
	}

	function check(answer){
		if(answer === quiz.questions[i].answer) {
			update($feedback, "Correct!", 'right');
			score++ ;
			update($score, score)
		} else {
			update($feedback, "Wrong!", "wrong");
		}
	}
	
	function gameOver(){
		//inform the player that the game has finished and tell
		//how many points scored
		update($question, "Game Over, you scored " + score + " points");
	}
}
