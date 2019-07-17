function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();

    } 
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;


}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>"
    gameOverHtml += "<h2 id= 'score> Your scores: " + quiz.scores + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("How many genres are in the music industry?", ["6", "8", "10", "15"], "10"),
    new Question("What was the most popular music genre of 2018?", ["Rock", "Pop", "Hip Hop", "Jazz"], "Hip Hop"),
    new Question("Who is the most famous singer(voted by fans)?", ["Ariana Grande", "Shawn Mendes", "Billie Eilish", "Justin Bieber"], "Ariana Grande"),
    new Question("Who's the richest singer in the world?", ["Justin Bieber", "Madonna", "Katy Perry", "Ed Sheeran"], "Madonna"),
    new Question("How many musical instruments are there in the world?", ["100-200", "300-500", "600-800", "1000+"], "1000+"),
    new Question("What was the first instrument to be invented?", ["Violin", "Flute", "Drum", "Harp"], "Flute"),
    new Question("What is the most popular musical instrument to learn?", ["Flute", "Piano", "Violin", "Clarinet"], "Violin"),
    new Question("What is the easiet instrument to learn?", ["Ukelele", "Piano", "Violin", "Trumpet"], "Ukelele"),
    new Question("Who is the most famous classical music composer?", ["Tschaikovsky", "Beethoven", "Mozart", "Wagner"], "Beethoven"),
    new Question("Which is the most popular song of 2019?", ["Old Town Road", "Call You Mine", "Senorita", "Bad Guy"], "Old Town Road"),
];

var quiz = new Quiz (questions);

populate();