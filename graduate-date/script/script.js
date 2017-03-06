var start = new Date("Jan 23, 2017 14:00:00");
var hour = 300;
var day = hour / 4;
var week = day/5;
var allday = week + week*2;
day = day + allday;
start.setDate(start.getDate() + day);
var month = function(ay){
    var arr = [   'yanvar','fevral','mart','aprel','may','iyun','iyul','avqust','sentyabr','oktyabr','noyabr','dekabr'
    ]
    for(i=0;i<arr.length;i++){
        if (i==ay){
            return arr[i]
        }
    }
}
document.getElementById('tarix').innerHTML = start.getDate() + ' ' + month(start.getMonth());
