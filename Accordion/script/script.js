var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            this.innerHTML = "Open Section +";
            this.style.marginBottom = "10px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.innerHTML = "Close -";
            this.style.marginBottom = "0px";
        }
    }
}
