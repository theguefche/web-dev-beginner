function hide_password() {
    document.querySelector("form input").type = "password";
    document.querySelector("form button").textContent = "Show";
}

function show_password() {
    document.querySelector("form input").type = "text";
    document.querySelector("form button").textContent = "Hide";
}

function toggle_password() {
    // if (document.querySelector("form input").type === "password") {
    //     show_password();
    // } else {
    //     hide_password();
    // }

    // document.querySelector("form input").type === "password" ? show_password() : hide_password();

}