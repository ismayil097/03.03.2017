var p = document.getElementById("myText");
var initial = function(){
    p.style.fontStyle="normal";
    p.style.fontWeight="normal";
    p.style.fontSize="16px";
}
var boldT = function(){
    p.style.fontWeight="bold";
}
var italic = function(){
    p.style.fontStyle="italic";
}
function fontSize(){
    var x = prompt('add text size');
    p.style.fontSize = x + 'px';
}
