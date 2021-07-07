var cal = document.forms['form']['calender'];
var btn = document.forms['form']['summit'];

var btn = document.getElementById('submit');


function berubah() {
    var x = document.getElementById("calender");
    if (x.value != "") {
        btn.style.background = "#B82935";
        x.style.color = "black";
    } else {
        btn.style.background = "#C4C4C4";
        x.style.color = "#C4C4C4";
    }
}