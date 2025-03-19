function increase() {
    let value = parseInt(document.getElementById('count').innerHTML);
    value++;
    document.getElementById('count').innerHTML = value;
}

function decrease() {
    let value = parseInt(document.getElementById('count').innerHTML);
    value--;
    document.getElementById('count').innerHTML = value;
}

// function show_alert() {
//     document.querySelector(".alert").style.display = "block";

//     setTimeout(() => {
//         document.querySelector(".alert").style.display = "none";
//     }, 3500);
// }


function show_alert_animated() {
    document.querySelector(".alert").classList.add("show-alert");

    setTimeout(() => {
        document.querySelector(".alert").classList.remove("show-alert");
    }, 3500);
}