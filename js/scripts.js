const border_input = document.getElementById("border-input");
const border_radius_input = document.getElementById("border-radius-input");
const background_input = document.getElementById("background-input");

const sf_mail = document.getElementById("sf-mail");

const square = document.getElementById("square");

border_input.addEventListener("input", () => {
    square.style.border = border_input.value;
});

border_radius_input.addEventListener("input", () => {
    square.style.borderRadius = border_radius_input.value;
});

background_input.addEventListener("input", () => {
    square.style.background = background_input.value;
});

sf_mail.addEventListener("click", () => {
    navigator.clipboard.writeText(sf_mail.innerText);
    alert("Почта скопирована.")
});

// const change_theme_icon = document.getElementById("change_theme_icon");
//
// change_theme_icon.onclick = function changeTheme() {
//     document.body.classList.toggle("dark-theme");
//
//     if (document.body.classList.contains("dark-theme")) {
//         change_theme_icon.src = "./images/svg/sun.svg"
//     } else {
//         change_theme_icon.src = "./images/svg/moon.svg"
//     }
// };

