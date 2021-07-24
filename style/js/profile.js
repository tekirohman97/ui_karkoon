let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let sgt = document.getElementById('sugest');
let btn_down = document.getElementById('btn-down');
let btn_up = document.getElementById('btn-up');


let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 2) * ${i})`;
    });
}

btn_down.onclick = function () {
    sgt.style.display = 'block'
    btn_down.style.display = 'none'
    btn_up.style.display = 'block'

}
btn_up.onclick = function () {
    sgt.style.display = 'none'
    btn_down.style.display = 'block'
    btn_up.style.display = 'none'

}