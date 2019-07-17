const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let  shuffledQuestions,currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions= questions.sort(() => Math.random)
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click')
        answerButtonsElement.appendChild(button)
        )
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstchild)
    }
}
function selectAnswer() {

}

const question = [
    {
    question: 'Which dog breed originated from Alaska?',
    answers: [
        { text: 'Akita', correct: false }
        { text: 'Malamute' correct: true}
        ]   
    }   

]