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

function showQuestion(question)
 {   questionElement.innerText = question.question 
    question.answers.forEach(answer => {  
   const button = document.createElement('button')   
     button.innerText = answer.text 
     var right = answer.correct
     var value = sessionStorage.getItem("Points")
    document.querySelector("#points").innerHTMl = value
    button.classList.add('btn')
    if (answer.correct == true) {
      if(sessionStorage.getItem("Points")==null){
        sessionStorage.setItem("Points",1)
      }else{
        var myPoints=sessionStorage.getItem("Points")
        myPoints=Number(myPoints)
        myPoints=myPoints+1
        sessionStorage.setItem("Points", myPoints)
        console.log('right')

      }
      button.dataset.correct = answer.correct
    }
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
    console.log('made it')
    var output = document.getElementById('points')
    var finalScore = sessionStorage.getItem('Points')
    output.innerHTML = finalScore
    


    // HERERERERE add onclick
    document.querySelector('#button').onclick = function() {
      var key = document.getElementById('inputKey').value
      localStorage.setItem(key, finalScore)
      sessionStorage.removeItem("Points")
      var myList = [] //list of points
      var nameList = [] //all players names
      var origin = [] //copy of local storage
      for(let i=0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var value = localStorage.getItem(key);
          var point = value
          value = Number(value)
          myList[myList.length] = value;
          nameList[nameList.length] = key;
          origin[origin.length] = key + ' ' + point;
      
      }
      
      myList.sort((a, b) => b - a)
      finalList = [] //sorted leaderboard
      for (let i = 0; i < localStorage.length; i++) {
          for (x in myList) {
              var check = nameList[x] + ' ' + myList[i]
              for (let z = 0; z < origin.length; z++) {
                  let newOrigin = origin[z]
                  if (check == newOrigin) {
                      finalList[finalList.length] = check
                      origin.splice(z, 1)
                      // console.log('match')
                  }
              }
      
          }
      
      }
      for(let i= 0;i<localStorage.length;i++) {
        var item= finalList[i]
        var li = document.createElement("li")
        var text = document.createElement("li")
        var text= document.createTextNode(item)
        li.appendChild(text)
        document.getElementById("myul").appendChild(li)
        startButton.innerText = 'Restart'
      }
      // startButton.classList.remove('hide')
    }
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

var questions = [
  {
    question: 'Which of these dog breeds originated from Alaska?',
    answers: [
      { text: 'Akita', correct: false },
      { text: 'Malamute', correct: true },
      { text: 'Golden Retriever', correct: false },
      { text: 'Pomeranian', correct: false }
    ]
  },
  {
    question: 'How much better is a dog\'s sense of smell than humans?',
    answers: [
      { text: '5,000 to 10,000 times', correct: false },
      { text: '1,000 to 5,000 times', correct: false},
      { text: '10,000 to 100,000 times', correct: true },
      { text: '100,000 to 200,000 times', correct: false }
    ]
  },
  {
    question: 'What do dogs classify as?',
    answers: [
      { text: 'Carnivore', correct: false },
      { text: 'Herbivore', correct: false },
      { text: 'Omnivore', correct: true},
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'How many dog breeds in the world?',
    answers: [
      { text: '340+', correct: true },
      { text: '200', correct: false },
      { text: '150', correct: false },    
      { text: '100', correct: false }

    ]
  },
  {
    question:'How often should you take a puppy out to potty?',
    answers: [
      { text: 'Every 1 hour', correct: false },
      { text: 'Every 2 hours', correct: true},
      { text: 'Once a day', correct: false },   
      { text: 'Never', correct: false }

    ]
  },
  {
    question: 'Which food is poisonous to your dog?',
    answers: [
      { text: 'Avocado Seed', correct: true },
      { text: 'Peanut butter', correct: false },
      { text: 'Chocolate', correct: true },     
      { text: 'Dog Food', correct: false }

    ]
  },
  {
    question: 'Can dogs get jealous when their owner pets another dog?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }

    ]
  },
  {
    question: 'What were Dachshunds bred for?',
    answers: [
      { text: 'To fight badgers', correct: true },
      { text: 'To eat your food', correct: false },
      { text: 'Be annoying', correct: false },     
      { text: 'Peeing in your lawn', correct: false }

    ]
  }
]

