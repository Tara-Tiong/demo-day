alert('Welcome to Dog Quiz');
const question = "Which dog breed originated from?"
const answer = prompt(question)
alert('You answered'+ answer);
const quiz = [
    ["How much better is a dogs sense of smell than humans?","10,000 to 100,000"],
    ["What type of eaters are dogs?","Omnivores"],
    ["Which dog breed originated from Alaska?","Malamute"],
];

function start(quiz){
let score = 0
//main game loop
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response == answer){
        alert('Correct!');
        score++;
    } else {
        alert('Wrong! The correct answer was ' + answer);
    }
}
//end of game loop

gameOver();
//function declarations 
function ask(question){
    return prompt(question);
}

function check(response,answer)
//at the end of game, you reveal the player's score
