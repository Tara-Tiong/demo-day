function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex() .text;
    }
}

var questions = [
    new Question("How many genres are in the music industry?", ["6", "8", "10", "15"], "10"),
    new Question("What was the most popular music genre of 2018?", ["Rock", "Pop", "Hip Hop", "Jazz"], "Hip Hop"),
    new Question("Who is the most famous singer(voted by fans)?", ["Ariana Grande", "Shawn Mendes", "Billie Eilish", "Justin Bieber"], "Ariana Grande"),
    new Question("Who's the richest singer in the world?", ["Justin Bieber", "Madonna", "Katy Perry", "Ed Sheeran"], "Madonna"),
    new Question("How many musical instruments are there in the world?", ["100-200", "300-500", "600-800", "1000+"], "1000+"),
    new Question("What was the first instrument to be invented?", ["Violin", "Flute", "Drum", "Harp"], "Flute"),
    new Question("What is the most popular musical instrument to learn?", ["Flute", "Piano", "Violin", "Clarinet"], "Violin"),
    new Question("What is the easiet instrument to learn?", ["Ukelele", "Piano", "Violin", "Trumpet"], "Ukelele"),
    new Question("Who is the most famous classical music composer?", ["Tschaikowsky", "Beethoven", "Mozart", "Wagner"], "Beethoven"),
    new Question("Which is the most popular song of 2019?", ["Old Town Road (Lil Nas X ft. Billy Ray Cyrus)", "Call You Mine (The Chainsmokers ft. Bebe Rexha)", "Senorita (Shawn Mendes & Camila Cabello)", "Bad Guy (Billie Eilish)"], "Old Town Road (Lil Nas X ft. Billy Ray Cyrus)"),
];

var quiz = new Quiz (questions);

populate();