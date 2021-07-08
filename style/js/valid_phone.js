var phone = document.forms['form']['phone'];
var btn = document.forms['form']['summit'];

var phone_error = document.getElementById('input-error');
var btn = document.getElementById('summit');

function validated() {
    if (phone.value.length < 10) {
        phone.style.border = "2px solid red";
        phone_error.style.display = "block";
        phone.focus();
        return false;
    } else if (phone.value = "") {
        phone.style.border = "1px solid #7E7E7E"
    }
}

function numberonly() {
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");
}

function berubah() {
    var x = document.getElementById("phone");
    if (x.value != "") {
        btn.style.background = "#B82935";
    } else {
        btn.style.background = "#C4C4C4";
    }
}