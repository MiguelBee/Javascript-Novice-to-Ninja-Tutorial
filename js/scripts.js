(function() {
"use strict";
var quiz = {
	"name" : "Super Hero Name Quiz", 
	"description": "How many super hereos can you name?", 
	"question": "What is the real name of ",
	"questions": [
	{"question" : "Superman", "answer" : "Clarke Kent"},
	{"question" : "Batman", "answer" :  "Bruce Wayne"},
	{"question" : "Wonder Woman", "answer" : "Dianna Prince"}
	]
}

//// dom references///views
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");
var $timer = document.getElementById("timer");

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

//helper functions

function hide(element) {
  element.style.display = "none";
}
function show(element){
	element.style.display = "block";
}

//Event Listeners
$start.addEventListener('click', function() { play(quiz) } , false);

//hide the form at the start of the game
hide($form);	

///function definitions///

function play(quiz){
	//intitialize the timer and set up interval that counts down
	var time = 20;
	update($timer, time);
	var interval = window.setInterval(countDown, 1000);
  var score = 0 // initialize score
  update($score,score);
  // hide button and show form
  hide($start);
  show($form);
  // add event listener to form for when it's submitted
  $form.addEventListener('submit', function(event) { 
    event.preventDefault();
    check($form[0].value);
    }, false);
  var i = 0;
  chooseQuestion();
	
	// nested functions//

	function chooseQuestion(){
		console.log("chooseQuestion() invoked");
		var question = quiz.questions[i].question;
		ask(question);
	}

	function ask(question) {
		console.log("ask() invoked");
		update($question, quiz.question + question); // quiz[i][0] is the i'th question
		$form[0].value = "";
		$form[0].focus();
	}

	function check(answer){
		console.log("check() invoked");
		if(answer === quiz.questions[i].answer) {
			update($feedback, "Correct!", 'right');
			score++ ;
			update($score, score)
		} else {
			update($feedback, "Wrong!", "wrong");
		}
		i++;
		if(i === quiz.questions.length){
			gameOver();
		} else {
			chooseQuestion();
		}
	}
	
	function gameOver(){
		console.log("gameOver() invoked");
		//inform the player that the game has finished and tell
		//how many points scored
		update($question, "Game Over, you scored " + score + " points");
		//stoop the countdown interval
		window.clearInterval(interval);
		//player can play again
		hide($form);
		show($start);
	}

	//this is called every second and decreases the time
	function countDown(){
		//decrease time by 1
		time--;
		//update the time displayed
		update($timer, time);
		//the game is over if the timer has reached 0
		if(time <= 0){
			gameOver();
		}
	}
}
}())