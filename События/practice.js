let count = 0;
const countEl = document.querySelector(".counter");
const buttonEl = document.querySelector('.button');

function changeCount () {
    if (count <= 0) {
        count++
    }else {
        count--
    }
}

buttonEl.oneclick = changeCount;
