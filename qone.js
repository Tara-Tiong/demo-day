var input = document.getElementById('myInput');

if(input.value.length == 0)
    // input.value = "Empty";

// var answer = 5;
// var input = document.querySelector(myInput)

// if (input === answer){
//     document.querySelector();
// } else {

// }
document.querySelector('#test').onclick = function() {
    var userIn = document.querySelector('#myInput').value;
    userIn = Number(userIn);
    console.log(userIn)
    if (userIn == 5) {
        window.location.replace('qtwo.html');
    } else {
        // document.querySelector('h1').innerHTML = 'You are Wrong!!!!!!';
        window.location.replace('incorrect.html');
    }

}