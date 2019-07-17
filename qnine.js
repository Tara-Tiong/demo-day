var userInput = document.querySelector('#check').onclick = function() {
     if (right === '4+5') {
         window.location.replace('qten.html');
     } else {
         window.location.replace('nawww.html');
     }
 }

var userCheck = document.querySelector('#check').onclick = function() {
    var e = document.getElementById('answer')
    var answer = e.options[e.selectedIndex].text
    console.log(answer)
}

if (userInput == userCheck){
    window.location.href = 'qten.html';
} else {
    window.location.href = 'nawww.html';
}

// document.querySelector('#check').onclick = function() {
//     window.location.href = 'qten.html';
// }