const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');
var code = document.forms['form']['code'];
var btn = document.forms['form']['submit'];
var l = document.forms['form']['last'];

var btn = document.getElementById('submit');
var phone_error = document.getElementById('input-error');

function handleInput(e) {
    // check for data that was inputtted and if there is a next input, focus it
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}

function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    // loop over each input, and populate with the index of that string
    inputs.forEach((input, i) => {
        console.log(input);
        input.value = paste[i] || '';
    });
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);



function berubah() {
    var x = document.getElementById("code");
    if (x.value != "") {
        btn.style.background = "#B82935";
    } else {
        btn.style.background = "#C4C4C4";
    }
}

function validated() {
    var cod = document.getElementById('code');
    if (l.value.length < 1) {
        phone_error.style.display = "block";
        cod.focus();
        return false;
    }
}
// 1. select the text when the next input is focued
// 2. Auto submit the form if all fields are filled after a paste
// 3. support for backspacing from 1 input to another