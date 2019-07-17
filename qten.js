var input = document.getElementById('myInput');


document.querySelector('#test').onclick = function() {
    var userIn = document.querySelector('#myInput').value;
    var right = 'Im_Possible Quiz'
    if (userIn == right) {
        console.log('right')
        window.location.replace('finale.html');
    } else {
        document.querySelector('h1').innerHTML = 'You are Wrong!!!!!!';
        window.location.replace('nexttime.html');
    }

}