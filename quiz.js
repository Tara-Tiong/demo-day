(function() 
 {
  var allQuestions = [{
    question: "What colorway is this? Air Force 1...",
    options: ["All White", "Split", "Nike News", "Off-White Volt"],
    answer: 0
  }, {
    question: "What colorway is this? Jordan 11...",
    options: ["Cherry", "Gym Red", "Supreme Custom", "Bred"],
    answer: 3
  }, {
    question: "What colorway is this? Air Max 1...",
    options: ["Americana", "Independence Day", "Royal Blue/Red/White","USA Anniversary"],
    answer: 1
  },{
    question: "What colorway is this? Jordan 12...",
    options: ["PSNY Collab", "Barons", "Chinese New Year", "Bordeaux"],
    answer: 2
  }, {
    question: "What colorway is this? Air Max 270...",
    options: ["Atmos Pink", "Grape", "Barely Rose", "White University Red"],
    answer: 1
  },{
    question: "What colorway is this? Vans...",
    options: ["Blk/Wht Old Skool High", "Clear Wht Old Skool", "Light Blk Old Skool Low", "Blk/Wht Old Skool Low"],
    answer: 3
  },{
    question: "What colorway is this? Yeezy Boost 700",
    options: ["Inertia", "Mauve", "Wave Runner", "Geode"],
    answer: 2
  },{
    question: "What colorway is this? Jordan 5...",
    options: ["Black Metallic", "Grape", "White Metallic", "Metallic Silver"],
    answer: 0
  },{
    question: "What colorway is this? Fenty x Puma...",
    options: ["Velvet Round Toe", "Velvet Red", "Camo", "Velvet Maroon"],
    answer: 1
  },{
    question: "What colorway is this? Air Max 97...",
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
        var myPoints=sessionStorage.getItem("score")

        score.append('Congratulations, you scored ' + correct + ' out of ' +allQuestions.length);
        return score;
        
  }
})();



let index = 0;

var pics = [
  "https://www.kicksonfire.com/wp-content/uploads/2017/07/AIR-FORCE-1-1.jpg?x98166", 
  "https://i.pinimg.com/originals/e9/8e/3d/e98e3d687553be329e1d9020efe05151.jpg",
  "https://sneakernews.com/wp-content/uploads/2019/06/nike-air-max-1-independence-day-cj4283-100-3.jpg",
  "https://www.kicksonfire.com/wp-content/uploads/2018/12/Air-Jordan-12-Chinese-New-Year-2019-.jpg?x98166",
  "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803935_01.jpg",
  "https://pmcfootwearnews.files.wordpress.com/2016/03/vans-old-skool.jpg",
  "https://sneakernews.com/wp-content/uploads/2018/09/adidas-yeezy-boost-700-store-list.jpg",
  "https://sneakernews.com/wp-content/uploads/2016/07/jordan-5-black-metallic-og-2016-4.jpg",
  "https://sneakernews.com/wp-content/uploads/2016/11/rihanna-puma-creeper-velvet-release-date-04.jpg",
  "http://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_12131226fff10a8e9d8ef48e777725a559447b5069052.jpg",];

document.querySelector('#next').onclick = function () {
    var select = document.querySelector("#first");
    if (index == pics.length - 1){
        index = 0;
        select.style.display = 'none';
        console.log('1')
    } else {
        index++;
        select.src= pics[index];
        console.log('2')
    }
}

// function showQuestion(question)
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