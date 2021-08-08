const input = document.querySelector('.input input');
const btn = document.querySelector('.btn-post');
const box = document.getElementById('chat');


input.oninput = function () {
    btn.style.display = 'block'

    if (input.value == "") {
        btn.style.display = 'none'
    }
};

function scroll() {
    box.scrollBy(0, 50);
}
btn.addEventListener('click', scroll);