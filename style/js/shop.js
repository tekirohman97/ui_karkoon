const btn_v = document.querySelector('.chose-variant');
const btn_s = document.querySelector('.shipping-btn');
const btn_as = document.querySelector('.add-shipping');
const exit = document.getElementById('exit')
const exit2 = document.getElementById('exit2')
const exit3 = document.getElementById('exit3')
const next = document.getElementById('next')
let subBtn = document.getElementById('button__decrease');
let addBtn = document.getElementById('button__increase');
let qty = document.querySelector('#button__wrapper input');


const checkAll = document.getElementsByClassName('checkbox-all');
const checkbrand = document.getElementsByClassName('checkbox-brand')


btn_v.onclick = function () {
    const black = document.getElementById('black')
    const popup = document.getElementById('popUp-variant')
    popup.classList.toggle('active');
    black.classList.toggle('active');
}

exit.onclick = function () {
    const black = document.getElementById('black')
    const popup = document.getElementById('popUp-variant')
    popup.classList.toggle('active');
    black.classList.toggle('active');
}
next.onclick = function () {
    const black = document.getElementById('black')
    const popup = document.getElementById('popUp-variant')
    popup.classList.toggle('active');
    black.classList.toggle('active');
}

btn_s.onclick = function () {
    const black = document.getElementById('black')
    const popups = document.getElementById('popUp-shipping')
    popups.classList.toggle('active');
    black.classList.toggle('active');
}

exit2.onclick = function () {
    const black = document.getElementById('black')
    const popups = document.getElementById('popUp-shipping')
    popups.classList.toggle('active');
    black.classList.toggle('active');
}




addBtn.addEventListener('click', () => {
    qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener('click', () => {
    if (qty.value <= 1) {
        qty.value = 1;
    } else {
        qty.value = parseInt(qty.value) - 1;
    }
});