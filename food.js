
function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;

	var correct = 0;


	if (question1 == "milk") {
		correct++;
}
	if (question2 == "mint") {
		correct++;
}	
	if (question3 == "pecan") {
		correct++;
}
	if (question4 == "pecan") {
		correct++;
}
	if (question5 == "pecan") {
		correct++;
}
	if (question6 == "pecan") {
		correct++;
}
	if (question7 == "pecan") {
		correct++;
}
	if (question8 == "pecan") {
		correct++;
}
	if (question9 == "pecan") {
		correct++;
}
	if (question10 == "pecan") {
		correct++;
}
	if (question11 == "pecan") {
		correct++;
}
	if (question12 == "pecan") {
		correct++;
}

	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = [
	"You tend to judge someone right away, though you don't purposefully try to.When you first meet someone, you unintentionally make assumptions about their character. No matter how nice they appear to be, you go off your initial instict and act accordingly.",
 	"That's just okay",
 	"You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
