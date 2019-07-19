var input = document.getElementById('myInput');


document.querySelector('#test').onclick = function() {
    var userIn = document.querySelector('#myInput').value;
    var right = ' ec_ni83$^+jew_yes__'
    if (userIn == right) {
        console.log('right')
        window.location.replace('qsix.html');
    } else {
        document.querySelector('h1').innerHTML = 'You are Wrong!!!!!!';
        window.location.replace('incorrect.html');
    }

}