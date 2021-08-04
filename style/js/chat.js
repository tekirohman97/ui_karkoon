const input = document.querySelector('.input input');
const btn = document.querySelector('.btn-post');


input.oninput = function () {
    btn.style.display = 'block'

    if (input.value == "") {
        btn.style.display = 'none'
    }
}