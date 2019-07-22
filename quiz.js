(function() 
 {
  var allQuestions = [{
    question: "What sneaker is this? Air Force 1...",
    // var x = document.createElement("https://www.kicksonfire.com/wp-content/uploads/2017/07/AIR-FORCE-1-1.jpg?x98166");
    options: ["Cocaine White G Fazos", "Split", "Nike News", "Off-White Volt"],
    answer: 0
  }, {
    question: "What sneaker is this? Jordan 11...",
    options: ["Cherry", "Gym Red", "Supreme Custom", "Bred"],
    answer: 3
  }, {
    question: "What sneaker is this? Air Max 1...",
    options: ["Americana", "Independence Day", "Royal Blue/Red/White","USA Anniversary"],
    answer: 1
  },{
    question: "What sneaker is this? Nike Dunk...",
    options: ["Low Sea Crystal", "Clear Jade", "Tiffany", "Diamond Supply Co."],
    answer: 2
  }, {
    question: "What sneaker is this? Fenty x Puma",
    options: ["Velvet Round Toe", "Velvet Red", "Camo", "Velvet Maroon"],
    answer: 1
  },{
    question: "What sneaker is this? Lebron 8 V/2...",
    options: ["Entourage", "China", "Sprite", "South Beach"],
    answer: 3
  },{
    question: "What sneaker is this? Yeezy Boost 700",
    options: ["Inertia", "Mauve", "Wave Runner", "Geode"],
    answer: 2
  },{
    question: "What sneaker is this? Kyrie 5...",
    options: ["Black History Month", "Concepts Ikhet", "Mamba Mentality", "Spongebob and Patrick"],
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


let index = 0;

var pics = [
  "https://www.kicksonfire.com/wp-content/uploads/2017/07/AIR-FORCE-1-1.jpg?x98166", 
  "https://sneakernews.com/wp-content/uploads/2018/12/air-jordan-11-bred-2019.jpg?w=780",
  "https://sneakernews.com/wp-content/uploads/2019/06/nike-air-max-1-independence-day-cj4283-100-3.jpg",
  "https://www.withsneaker.com/wp-content/uploads/2019/01/Nike-SB-Dunk-Low-Tiffany.jpg",
  "https://sneakernews.com/wp-content/uploads/2016/11/rihanna-puma-creeper-velvet-release-date-04.jpg",
  "https://live.staticflickr.com/8101/8550056532_b2d9c5201f_b.jpg",
  "https://sneakernews.com/wp-content/uploads/2018/09/adidas-yeezy-boost-700-store-list.jpg",
  "https://i.pinimg.com/originals/31/cf/fd/31cffd14f630217d03159768f02b9824.jpg",
  "http://images.us.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/0/8/0/christianlouboutin-pigalle-3080698_PK20_2_1200x1200_1511939397.jpg",
  "http://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_12131226fff10a8e9d8ef48e777725a559447b5069052.jpg",];

function change() {
    var select = document.querySelector("#first");
    if (index == pics.length - 1){
        index = 0;
        select.src= pics[index];
    }
    else {
        index++;
        select.src= pics[index];
    }
}