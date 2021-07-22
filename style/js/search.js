let box = document.getElementById('box-recent')
let more = document.getElementById('see-more')
let more2 = document.getElementById('see-more-2')
let search = document.getElementById('search')
let box1 = document.getElementById('box-1')
let box2 = document.getElementById('box-2')


let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

/* #TODO Input Search */

more.onclick = function () {
    box.style.height = 'auto'
    more.style.display = 'none'
    more2.style.display = 'block'
}
more2.onclick = function () {
    box.style.height = '173px'
    more.style.display = 'block'
    more2.style.display = 'none'
}

search.oninput = function () {
    box1.style.display = 'none'
    box2.style.display = 'flex'

    if (search.value == "") {
        box1.style.display = 'flex'
        box2.style.display = 'none'
    }
}

/* #TODO box 2 */

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 3) * ${i})`;
    });
}