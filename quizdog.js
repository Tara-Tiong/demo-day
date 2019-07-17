const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      //if sessionStorage.getItem('points') = 'null'
      sessionStorage.setItem('points', 1)
    } else {
     var points = sessionStorage.getItem("points")
     points= Number(points);
     points += 1
     sessionStorage.setItem('points', points)
      }
      //else get item
      //convert iem to number
      // add one to item
    
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    document.getElementById('points').innerHTML = sessionStorage.getItem('points')

    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which of these dog breeds originated from Alaska?',
    answers: [
      { text: 'Akita', correct: false },
      { text: 'Malamute', correct: true },
      { text: 'Golden Retriever', correct: false },
      { text: 'Pomeranian', correct: false },
    ]
  },
  {
    question: 'How much better is a dog\'s sense of smell than humans?',
    answers: [
      { text: '5,000 to 10,000 times', correct: false },
      { text: '1,000 to 5,000 times', correct: false},
      { text: '10,000 to 100,000 times', correct: true },
      { text: '100,000 to 200,000 times', correct: false },
    ]
  },
  {
    question: 'What do dogs classify as?',
    answers: [
      { text: 'Carnivore', correct: false },
      { text: 'Herbivore', correct: false },
      { text: 'Omnivore', correct: true},
      { text: 'IDK', correct: false },
    ]
  },
  {
    question: 'How many dog breeds in the world?',
    answers: [
      { text: '340+', correct: true },
      { text: '200', correct: false },
      { text: '150', correct: false },    
      { text: '100', correct: false },

    ]
  },
  {
    question:'How often should you take a puppy out to potty?',
    answers: [
      { text: 'Every 1 hour', correct: false },
      { text: 'Every 2 hours', correct: true},
      { text: 'Once a day', correct: false },   
      { text: 'Never', correct: false },

    ]
  },
  {
    question: 'Which food is poisonous to your dog?',
    answers: [
      { text: 'Avocado Seed', correct: true },
      { text: 'Peanut butter', correct: false },
      { text: 'Chocolate', correct: true },     
      { text: 'Dog Food', correct: false },

    ]
  },
  {
    question: 'Can dogs get jealous when their owner pets another dog?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },

    ]
  },
  {
    question: 'What were Dachshunds bred for?',
    answers: [
      { text: 'To fight badgers', correct: true },
      { text: 'To eat your food', correct: false },
      { text: 'Be annoying', correct: false },     
      { text: 'Peeing in your lawn', correct: false },

    ]
  }
]