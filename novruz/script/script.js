var countDownDate = new Date("March 20, 2017 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("novruz").innerHTML = days + " gün " + hours + " saat "
        + minutes + " dəqiqə " + seconds + " saniyə qaldı";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("novruz").innerHTML = "EXPIRED";
    }
}, 1000);
