(function() 
 {
  var allQuestions = [{
    question: "What sneaker is this? Air Force 1...",
    // var x = document.createElement("https://www.kicksonfire.com/wp-content/uploads/2017/07/AIR-FORCE-1-1.jpg?x98166");
    options: ["Cocaine White G Fazos", "Split", "Nike News", "Off-White Volt"],
    answer: 0
  }, {
    question: "What sneaker is this? Jordan 11...",
    options: ["Cherry", "Gym Red", "Chicago", "Bred"],
    answer: 3
  }, {
    question: "What sneaker is this? Air Max 1...",
    options: ["Americana", "Independence Day", "Royal Blue/Red/White","USA Anniversary"],
    answer: 1
  },{
    question: "What sneaker is this? Nike Dunk...",
    options: ["Low Sea Crystal", "Clear Jade", "Tiffany", "Diamond Supply Co. Collab"],
    answer: 2
  }, {
    question: "What sneaker is this? Fenty x Puma...Creepers",
    options: ["Velvet Round Toe", "Velvet Red", "Camo", "Velvet Maroon"],
    answer: 1
  },{
    question: "What sneaker is this? Lebron 8...",
    options: ["Entourage", "Chase Down", "Sprite", "South Beach"],
    answer: 3
  },{
    question: "What sneaker is this? Yeezy Boost 700",
    options: ["Inertia", "Mauve", "Wave Runner", "Geode"],
    answer: 2
  },{
    question: "What sneaker is this? Kyrie 5...",
    options: ["Black History Month", "Concepts Ikhet Multi-Color", "Mamba Mentality", "Spongebob and Patrick"],
    answer: 0
  },{
    question: "What heel is this? Christian Louboutin...",
    options: ["Pigalle 100mm Nude", "Pigalle 120mm Nude", "Pigalle 85mm Nude", "Pigalle 70mm Nude"],
    answer: 1
  },{
    question: "What sneaker is this? Air Max 97...",
    options: ["Barcode", "Metallic Gold Pack", "Metallic Gold", "Sean Wotherspoon"],
    answer: 2
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('You have not picked an option!');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('Congratulations, you scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();