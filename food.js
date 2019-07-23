
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
		"Introvert: You are very easy to please,you are super focused when it comes to things you want to get done,you pay attention and are a very good listener, Not at all times, but it feels relaxing to have time for yourself, and away from people.",
 "Perfectionist: You tend to always have the desire to be useful and strive to improve.You have this  desire to input your ideas into a conversation It’s not always positive and you understand that.Sometimes you need to take a breather because you put stress on yourself that isn’t good for your mental health. ","You got: Humble You acknowledge when you are wrong, and have high enough standards without having an excess of pride. But, you tend to have modest pride when you stick up for something you believe in.",
 "Humble: You acknowledge when you are wrong, and have high enough standards without having an excess of pride. But, you tend to have modest pride when you stick up for something you believe in.",
 "Adventurous: You are at a point in your life where you are ready to explore what you haven’t seen yet.You tend to take risks,try out new methods,ideas experiences. You don’t believe you have exceeded your limit.",
 "Independant: You do things your way and you never rely on others to get things done. You always have your own input and is sometimes mistaken as bossy.You tend to take charge and end up doing more than you need to. You’re likely to go above and beyond when you put your mind to something.",
 "Perceiver: You prefer to keep your options open.You like to act spontaneously.You tend to be flexible with making plans or dates, and people like that about you.You are very laid back and soft spoken.",
 "Outgoing: You’re a social butterfly who tends to make friends anywhere you go.You’re usually the center of attention and people naturally gravitate towards you. In awkward situations, you’re likely to crack a joke to break the silence. Your looked up to and take many leadership roles. You’re likely to explore with your wardrobe over the years. ",
 "Giving: When you give a person a gift/letter for an occasion, you put a lot of thought into it.You go all out for them, and even make settle additions or changes before you gift it. You get excited to see their reaction from when they see it. You appreciate it when people do it back because though you don’t care if they do, you just appreciate that you get something in return because you tend to give a lot and don’t get anything in return.",
 "Feeler: You tend to be more sensitive and cooperative, and decide on stuff based on your own personal values and how others will be affected by your actions. You over think about a situation and put stress on yourself.If you made a bad decision you end up beating yourself up for it instead of understanding that it’s okay.",
 "Judgemental: You tend to judge someone right away, though you don't purposefully try to.When you first meet someone, you unintentionally make assumptions about their character. No matter how nice they appear to be, you go off your initial instict and act accordingly.",
"Detail Oriented: You are very observant to detail.If something that you’ve worked on is slightly off, you automatically change it.You pay attention to every flavor in the food you eat. ",
 "Humorous:You are funny and tend to make people laugh effortlessly. People are drawn to your energy and always enjoy being around you. You are usually the rock of the friend group that holds it down when situations go left.",
];
	var score;

	if (correct == 0) {
		score = 0;
	}

	if (correct ==1) {
		score = 1;
	}

	if (correct == 2) {
		score = 2;
	}

	if (correct == 3) {
		score = 3;
	}
	if (correct == 4) {
		score = 4;
	}
	if (correct == 5) {
		score = 5;
	}
	if (correct == 6) {
		score = 6;
	}
	if (correct == 7) {
		score = 7;
	}
	if (correct == 8) {
		score = 8;
	}
	if (correct == 9) {
		score = 9;
	}
	if (correct == 10) {
		score = 10;
	}
	if (correct == 11) {
		score = 11;
	}
	if (correct == 12) {
		score = 12;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "you got";
	document.getElementById("picture").src = pictures[score];
	}
	
