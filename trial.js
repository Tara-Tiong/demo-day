
  var collection = [];
  var rightAnswers = 0;
  var pageHeight = window.screen.availHeight;
  
  
  function display(question) {
  
      var answersHtml = '';
      var questionHtml = '<div class="wrapper" id="question_' + question.id + '">' + '<div class="question">' + question.description + '</div>' + '<div id="answers" class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">' + '</div>' + '</div>';
  
      document.getElementById('content').insertAdjacentHTML('afterbegin', questionHtml);
  
      for (var i = 0; i < question.answers.length; i++) {
          var name = 'question_' + question.id;
  
          answersHtml += '<div class="answer" name=' +
              name +
              ' onclick="evaluateUserAnwser(' +
              question.id +
              ',' +
              question.answers[i].id +
              ')";>' +
              question.answers[i].answer +
              '</div>';
      }
  
      document.getElementById('answers').insertAdjacentHTML('afterbegin', answersHtml);
      document.querySelector('.wrapper').style.height = pageHeight + 'px';
  }
  
  function disableClickEvent(selectedQuestionId) {
      var selectedElement = 'question_' + selectedQuestionId;
      var questionAnswers = document.getElementsByName(selectedElement);
  
      for (var index = 0; index < questionAnswers.length; index++) {
          questionAnswers[index].removeAttribute('onclick');
      }
  }
  
  function checkIfQuizEnded() {
      if (document.querySelectorAll('.wrapper').length == 0) {
          var endgameHtml = '<div class="endgameMessage"><p><b>Game Over</b></p><p>Right answers:' + rightAnswers + '</p></div>';
          document.getElementById('content').insertAdjacentHTML('afterbegin', endgameHtml);
      }
  }
  
  function evaluateUserAnwser(selectedQuestionId, answerId) {
  
      for (var index = 0; index < questionsCollection.length; index++) {
          if (questionsCollection[index].id == selectedQuestionId && answerId == questionsCollection[index].correctAnswer) {
              rightAnswers = rightAnswers + 1;
              continue;
          }
          var questionContainer = document.getElementById('question_' + selectedQuestionId);
          if (questionContainer) {
              questionContainer.parentNode.removeChild(questionContainer);
          }
      }
      disableClickEvent(selectedQuestionId);
      checkIfQuizEnded();
  }
  
  function initQuiz() {
      for (var i = 0; i < questionsCollection.length; i++) {
          display(questionsCollection[i]);
      }
  }
  
  initQuiz();