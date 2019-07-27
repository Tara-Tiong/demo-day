window.onload = function() {
	document.body.style.backgroundColor = '#fcf0fa';
}


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
	if (question4 == "pumpkin") {
		correct++;
}
	if (question5 == "v") {
		correct++;
}
	if (question6 == "tee") {
		correct++;
}
	if (question7 == "funnel") {
		correct++;
}
	if (question8 == "cro") {
		correct++;
}
	if (question9 == "o") {
		correct++;
}
	if (question10 == "cin") {
		correct++;
}
	if (question11 == "spee") {
		correct++;
}
	if (question12 == "Fried") {
		correct++;
}

	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = [
		"Introvert: You are very easy to please,you are super<br><br>focused when it comes to things you want to get<br><br> done,you pay attention and are a very good listener,<br><br> Not at all times, but it feels relaxing to have time for<br><br> yourself, and away from people.",
 "Perfectionist: You tend to always have the desire to be <br><br>useful and strive to improve.You have this  desire to <br><br>input your ideas into a conversation It’s not always <br><br>positive and you understand that.Sometimes you need <br><br>to take a breather because you put stress on yourself <br><br>that isn’t good for your mental health. ","You got: Humble You acknowledge when you are wrong, and have high enough standards without having an excess of pride. But, you tend to have modest pride when you stick up for something you believe in.",
 "Humble: You acknowledge when you are <br><br>wrong, and have high enough standards without <br><br> having an excess of pride. But, you tend to have <br><br>modest pride when you stick up for something you<br><br>believe in.",
 "Adventurous: You are at a point in your life where<br><br> you are ready to explore what you haven’t seen <br><br>yet.You tend to take risks,try out new methods,ideas<br><br> experiences. You don’t believe you have exceeded <br><br>your limit.",
 "Independent: You do things your way and you never <br><br>rely on others to get things done. You always have<br><br> your own input and is sometimes mistaken as<br><br> bossy.You tend to take charge and end up doing <br><br>more than you need to. You’re likely to go above and<br><br> beyond when you put your mind to something.",
 "Perceiver: You prefer to keep your options open.<br><br>You like to act spontaneously.You tend to be flexible <br><br>with making plans or dates, and people like that <br><br>about you.You are very laid back and soft spoken.",
 "Outgoing: You’re a social butterfly who tends to make <br><br>friends anywhere you go.You’re usually the center of<br><br> attention and people naturally gravitate towards you.<br><br> In awkward situations, you’re likely to crack a joke to<br><br> break the silence. Your looked up to and take many<br><br> leadership roles. You’re likely to explore with your<br><br> wardrobe over the years. ",
 "Giving: When you give a person a gift/letter for an<br><br> occasion, you put a lot of thought into it.You go all <br><br>out for them, and even make settle additions or<br><br> changes before you gift it. You get excited to see their<br><br> reaction from when they see it. You appreciate it<br><br> when people do it back because though you don’t<br><br> care if they do, you just appreciate it.",
 "Feeler: You tend to be more sensitive and<br><br> cooperative, and decide on stuff based on your own <br><br>personal values and how others will be affected by<br><br> your actions. You over think about a situation and put <br><br>stress on yourself.If you made a bad decision you end <br><br>up beating yourself up for it instead of understanding <br><br>that it’s okay.",
 "Judgemental: You tend to judge someone right away, <br><br>though you don't purposefully try to.When you first<br><br> meet someone, you unintentionally make assumptions <br><br>about their character. No matter how nice they<br><br> appear to be, you go off your initial instict and act <br><br>accordingly.",
"Detail Oriented: You are very observant to detail.If something that you’ve worked on is slightly off, you automatically change it.You pay attention to every flavor in the food you eat. ",
 "Humorous:You are funny and tend to make people laugh effortlessly. People are drawn to your energy and always enjoy being around you. You are usually the rock of the friend group that holds it down when situations go left.",
];
	var score;

	// if (correct == 0) {
	// 	score = 0;
	// }

	// if (correct ==1) {
	// 	score = 1;
	// }

	// if (correct == 2) {
	// 	score = 2;
	// }

	// if (correct == 3) {
	// 	score = 3;
	// }
	// if (correct == 4) {
	// 	score = 4;
	// }
	// if (correct == 5) {
	// 	score = 5;
	// }
	// if (correct == 6) {
	// 	score = 6;
	// }
	// if (correct == 7) {
	// 	score = 7;
	// }
	// if (correct == 8) {
	// 	score = 8;
	// }
	// if (correct == 9) {
	// 	score = 9;
	// }
	// if (correct == 10) {
	// 	score = 10;
	// }
	// if (correct == 11) {
	// 	score = 11;
	// }
	// if (correct == 12) {
	// 	score = 12;
	// }
	// score = correct;

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[correct];

	}
	
