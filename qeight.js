var input = document.getElementById('myInput');

if(input.value.length == 0)



document.querySelector('#memory').onclick = function() {
    var userIn = document.querySelector('#myInput').value;
    if (userIn == 'b') {
        window.location.replace('qnine.html');
    } else {
        window.location.replace('hellnaw.html');
    }

}