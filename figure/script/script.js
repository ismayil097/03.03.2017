function foo1(param){
    param.style.width = '300px',
    param.style.height = '300px';
}
function foo2(param){
    param.style.width = '',
    param.style.height = '';
}
function foo3(param){
    param.style.borderLeftWidth = '180px';
    param.style.borderRight = '150px solid transparent';
    param.style.borderBottom = '150px solid transparent';
    param.style.borderTop = '150px solid transparent';
}
function foo4(param){
    param.style.borderLeftWidth = '';
    param.style.borderRight = '';
    param.style.borderBottom = '';
    param.style.borderTop = '';
}
var fiqur = document.getElementsByClassName("same");
for (var i=0;i<2;i++){
    fiqur[i].onclick = function() {
        if (this.style.width == ''){
            foo1(this);
        } else {
            foo2(this);
        }
    }
}
fiqur[2].onclick = function(){
    if(this.style.borderLeftWidth == ''){
        foo3(this);
        this.style.left = '20px'
    }else{
        foo4(this);
        this.style.left = ''
    }
}
document.getElementsByTagName("button")[0].onclick = function(){
    var color = document.getElementById("reng-kvadrat").value;
    document.getElementById("kvadrat").style.background = color;
}
document.getElementsByTagName("button")[1].onclick = function(){
    var color = document.getElementById("reng-daire").value;
    document.getElementById("daire").style.background = color;
}
document.getElementsByTagName("button")[2].onclick = function(){
    var color = document.getElementById("reng-ucbucaq").value;
    document.getElementById("ucbucaq").style.borderLeftColor = color;
}


