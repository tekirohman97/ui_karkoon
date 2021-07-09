var state = false;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var btn = document.getElementById('btn-CP')


/* #TODO Create Password */

function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        img1.style.display = "block";
        img2.style.display = "none";
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text");
        img1.style.display = "none";
        img2.style.display = "block";
        state = true;
    }
}

function berubah() {
    var x = document.getElementById("password");
    var y = document.getElementById("username");
    if (x.value != "") {
        btn.style.background = "#B82935";
    } else if (y.value != "") {
        btn.style.background = "#B82935";
    } else {
        btn.style.background = "#C4C4C4";
    }
}