var lembe = document.getElementsByClassName('color');
var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var a=0;

svetofor();
w = setInterval(svetofor,13000);

function svetofor() {
k = setInterval(function() {
  if (a < 5) {
  a++;
  red.style.background = 'red';
  yellow.style.background = 'gray';
  green.style.background = 'gray';
} else {
  a=0
  clearInterval(k);
}
},1000);

setTimeout(function () {
m = setInterval(function() {
  if (a < 3) {
    console.log('interval');
    a++;
    red.style.background = 'gray';
    yellow.style.background = 'yellow';
    green.style.background = 'gray';
  } else {
    a=0;
    clearInterval(m);
  }
},1000);
}, 5000);

setTimeout(function () {
  n = setInterval(function() {
  if (a < 4) {
    a++;
    yellow.style.background = 'gray';
    red.style.background = 'gray';
    green.style.background = 'green';
  } else {
    a=0;
    clearInterval(n);
  }
},1000);
}, 8000);
}
