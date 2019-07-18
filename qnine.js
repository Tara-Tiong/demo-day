// localStorage.setItem('answer', '4+5');

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

document.querySelector('#check').onclick = function (){
    if (userInput == userCheck){
        window.location.href = 'qten.html';
    } else {
        // window.location.href = 'nawww.html';}    
}

}