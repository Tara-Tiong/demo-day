var all_questions = [{
    question_string: "What's the name of the quiz you could not complete?",
    choices: {
      correct: "Im_Possible Quiz",
      wrong: ["Impossible Quiz", "I'm_Possible Quiz", "The Impossible Quiz"]
    }
  }, {
    question_string: "Which page of the last quiz had a polka dotted background?",
    choices: {
      correct: "Page 7",
      wrong: ["Page 1", "Page 1", "Page 1"]
    }
  }, {
    question_string: "__________ stripes did not show up anywhere in the last quiz.?",
    choices: {
      correct: "Horizontal",
      wrong: ["Diagonal", "Vertical","Inside Out Backwards"]
    }
  }, {
    question_string: 'Who said, "What color stripes was on the eigth page?',
    choices: {
      correct: "White and Pink",
      wrong: ["White and Black", "Black and White", "Black and Pink"]
    }
  },{
    question_string: 'What color was not in the background of page two?',
    choices: {
      correct: "Pink",
      wrong: ["Yellow", "White","Blue"]
    }
  },{
    question_string: 'Do you remember which pages we skipped in the impossible quiz?',
    choices: {
      correct: "4 and 5",
      wrong: ["3 and 4", "5 and 6", "6 and 7"]
    }
  }, {
    question_string: 'Can you recall the third question you were asked?',
    choices: {
      correct: "What’s the age difference between the group members?",
      wrong: ["What’s the answer to (6^2+1)-(4*2)=___?", "What schools do the group members go to?","How does Mitchell spell his name?"]
    }
  },{
    question_string: 'Remember the opening page of the quiz, what did it say?',
    choices: {
      correct: "Quiz Time",
      wrong: ["It’s Quiz Time!", "Ready for the Quiz?", "Start"]
    }
  },{
    question_string: 'Which page in the last quiz wasn’t blank?',
    choices: {
      correct: "Page 2",
      wrong: ["Page 3", "Page 6", "Page 9"]
    }
  },{
    question_string: 'Where was this quiz hidden?',
    choices: {
      correct: "Hidden in Mitchell’s picture",
      wrong: ["On the info page", "Linked to the word “Impossible”", "On one of the sneaker pictures"]
    }
  }];
  var Quiz = function(quiz_name) {
    this.quiz_name = quiz_name;
    this.questions = [];
  }
  Quiz.prototype.add_question = function(question) {
    // Randomly choose where to add question
    var index_to_add_question = Math.floor(Math.random() * this.questions.length);
    this.questions.splice(index_to_add_question, 0, question);
  }
  Quiz.prototype.render = function(container) {
    // For when we're out of scope
    var self = this;
    
    // Hide the quiz results modal
    $('#quiz-results').hide();
    
    // Write the name of the quiz
    $('#quiz-name').text(this.quiz_name);
    
    // Create a container for questions
    var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
    
    // Helper function for changing the question and updating the buttons
    function change_question() {
      self.questions[current_question_index].render(question_container);
      $('#prev-question-button').prop('disabled', current_question_index === 0);
      $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
      var all_questions_answered = true;
      for (var i = 0; i < self.questions.length; i++) {
        if (self.questions[i].user_choice_index === null) {
          all_questions_answered = false;
          break;
        }
      }
      $('#submit-button').prop('disabled', !all_questions_answered);
    }
    
    // Render the first question
    var current_question_index = 0;
    change_question();
    
    // Add listener for the previous question button
    $('#prev-question-button').click(function() {
      if (current_question_index > 0) {
        current_question_index--;
        change_question();
      }
    });
    
    // Add listener for the next question button
    $('#next-question-button').click(function() {
      if (current_question_index < self.questions.length - 1) {
        current_question_index++;
        change_question();
      }
    });
    
    // Add listener for the submit answers button
    $('#submit-button').click(function() {
      // Determine how many questions the user got right
      var score = 0;
      for (var i = 0; i < self.questions.length; i++) {
        if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
          score++;
        }
      }
      
      // Display the score with the appropriate message
      var percentage = score / self.questions.length;
      console.log(percentage);
      var message;
      if (percentage === 1) {
        message = 'The answer to Question 10 was "it."'
      } else if (percentage >= .75) {
        message = 'The answer to Question 10 was "it."'
      } else if (percentage >= .5) {
        message = 'The answer to Question 10 was "it."'
      } else {
        message = 'The answer to Question 10 was "it."'
      }
      $('#quiz-results-message').text(message);
      $('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
      $('#quiz-results').slideDown();
      $('#quiz button').slideUp();
    });
    
    // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
    question_container.bind('user-select-change', function() {
      var all_questions_answered = true;
      for (var i = 0; i < self.questions.length; i++) {
        if (self.questions[i].user_choice_index === null) {
          all_questions_answered = false;
          break;
        }
      }
      $('#submit-button').prop('disabled', !all_questions_answered);
    });
  }
  
  // An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
  var Question = function(question_string, correct_choice, wrong_choices) {
    // Private fields for an instance of a Question object.
    this.question_string = question_string;
    this.choices = [];
    this.user_choice_index = null; // Index of the user's choice selection
    
    // Random assign the correct choice an index
    this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
    
    // Fill in this.choices with the choices
    var number_of_choices = wrong_choices.length + 1;
    for (var i = 0; i < number_of_choices; i++) {
      if (i === this.correct_choice_index) {
        this.choices[i] = correct_choice;
      } else {
        // Randomly pick a wrong choice to put in this index
        var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
        this.choices[i] = wrong_choices[wrong_choice_index];
        
        // Remove the wrong choice from the wrong choice array so that we don't pick it again
        wrong_choices.splice(wrong_choice_index, 1);
      }
    }
  }
  
  // A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
  Question.prototype.render = function(container) {
    // For when we're out of scope
    var self = this;
    
    // Fill out the question label
    var question_string_h2;
    if (container.children('h2').length === 0) {
      question_string_h2 = $('<h2>').appendTo(container);
    } else {
      question_string_h2 = container.children('h2').first();
    }
    question_string_h2.text(this.question_string);
    
    // Clear any radio buttons and create new ones
    if (container.children('input[type=radio]').length > 0) {
      container.children('input[type=radio]').each(function() {
        var radio_button_id = $(this).attr('id');
        $(this).remove();
        container.children('label[for=' + radio_button_id + ']').remove();
      });
    }
    for (var i = 0; i < this.choices.length; i++) {
      // Create the radio button
      var choice_radio_button = $('<input>')
        .attr('id', 'choices-' + i)
        .attr('type', 'radio')
        .attr('name', 'choices')
        .attr('value', 'choices-' + i)
        .attr('checked', i === this.user_choice_index)
        .appendTo(container);
      
      // Create the label
      var choice_label = $('<label>')
        .text(this.choices[i])
        .attr('for', 'choices-' + i)
        .appendTo(container);
    }
    
    // Add a listener for the radio button to change which one the user has clicked on
    $('input[name=choices]').change(function(index) {
      var selected_radio_button_value = $('input[name=choices]:checked').val();
      
      // Change the user choice index
      self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
      
      // Trigger a user-select-change
      container.trigger('user-select-change');
    });
  }
  
  // "Main method" which will create all the objects and render the Quiz.
  $(document).ready(function() {
    // Create an instance of the Quiz object
    // var quiz = new Quiz('My Quiz');
    var quiz = new Quiz('');
  
    // Create Question objects from all_questions and add them to the Quiz object
    for (var i = 0; i < all_questions.length; i++) {
      // Create a new Question object
      var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
      
      // Add the question to the instance of the Quiz object that we created previously
      quiz.add_question(question);
    }
    
    // Render the quiz
    var quiz_container = $('#quiz');
    quiz.render(quiz_container);
  });


//   function showQuestion(question)
//  {   questionElement.innerText = question.question 
//     question.answers.forEach(answer => {  
//    const button = document.createElement('button')   
//      button.innerText = answer.text 
//      var value = sessionStorage.getItem("Points")
//     document.querySelector("#points").innerHTMl = value
//     button.classList.add('btn')  
//     if (answer.correct) {
//       if(sessionStorage.getItem("Points")==null){
//         sessionStorage.setItem("Points",1)
//         console.log('created')
//       }else{
//         var myPoints=sessionStorage.getItem("Points")
//         myPoints=Number(myPoints)
//         myPoints=myPoints+1
//         sessionStorage.setItem("Points", myPoints)
//         console.log('added')
//       }
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// } 
// document.querySelector('#button').onclick = function() {
//   var key = document.getElementById('inputKey').value
//   localStorage.setItem(key, finalScore)
//   var myList = [] //list of points
//   var nameList = [] //all players names
//   var origin = [] //copy of local storage
//   for(let i=0; i < localStorage.length; i++) {
//       var key = localStorage.key(i);
//       var value = localStorage.getItem(key);
//       var point = value
//       value = Number(value)
//       myList[myList.length] = value;
//       nameList[nameList.length] = key;
//       origin[origin.length] = key + ' ' + point;
  
//   }
  
//   myList.sort((a, b) => b - a)
//   finalList = [] //sorted leaderboard
//   for (let i = 0; i < localStorage.length; i++) {
//       for (x in myList) {
//           var check = nameList[x] + ' ' + myList[i]
//           for (let z = 0; z < origin.length; z++) {
//               let newOrigin = origin[z]
//               if (check == newOrigin) {
//                   finalList[finalList.length] = check
//                   // console.log('match')
//               }
//           }
  
//       }
  
//   }