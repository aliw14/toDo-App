let div = document.querySelector("#list");
let count = 0;

function myfunc() {
    let h2 = document.createElement(`h2`);
    let value = document.querySelector("#plans").value;
    let deleteBtn = document.createElement("button");
    let all = document.createElement(`div`)

    h2.innerHTML = value;
    deleteBtn.innerHTML = "Delete";
    all.append(h2, deleteBtn);
    div.append(all);
    myfunc2();

    deleteBtn.addEventListener("click", function () {
        all.remove();
        count--;
        refresh();
    });
}

function myfunc2() {
    count++;
    refresh();
}

const refresh=()=>{
    let alert_box = document.querySelector(".alert");

    if (count > 0) {
        alert_box.style.display = "none";
    } else {
        alert_box.style.display = "block";
    }

    document.querySelector("#number").innerHTML = count;
}