function slider(param) {
    var attr = param.getAttribute("src");
    document.getElementsByClassName("slider")[0].setAttribute("style", "background-image:url(" + attr + ")");
}
var count = 0;
var next = function() {
    count++;
    if (count == document.querySelectorAll('.thumbs .thumb').length) {
        count = 0;
    }
    var x = document.getElementsByClassName("thumb")[count].children[0].getAttribute("src");
    document.getElementsByClassName("slider")[0].setAttribute("style", "background-image:url(" + x + ")");
}
var previous = function() {
    if (count == 0) {
        count = document.querySelectorAll('.thumbs .thumb').length;
    }
    count--;
    var x = document.getElementsByClassName("thumb")[count].children[0].getAttribute("src");
    document.getElementsByClassName("slider")[0].setAttribute("style", "background-image:url(" + x + ")");
}



