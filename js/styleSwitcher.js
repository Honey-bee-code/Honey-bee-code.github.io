const links = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    for (let i = 0; i < links.length; i++) {
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
    localStorage.setItem("selected-color", color);
    document.querySelector(".style-switcher").classList.toggle("open");
}
function setColor(color) {
    for (let i = 0; i < links.length; i++) {
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
}

const selectedColor = localStorage.getItem("selected-color");
if (!selectedColor) {
    setColor("green");
}
setColor(selectedColor);

// body skin
const bodySkin = document.querySelectorAll(".body-skin");
for (let i = 0; i < bodySkin.length; i++) {
    bodySkin[i].addEventListener("change", function () {
        if (this.value === "dark") {
            document.body.classList.add("dark");
            localStorage.setItem("selected-theme", "dark");
            document.querySelector(".style-switcher").classList.toggle("open");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("selected-theme", "light");
            document.querySelector(".style-switcher").classList.toggle("open");
        }
    });
}

document.querySelector(".toggle-style").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"]("dark");
    if (selectedTheme === "dark") {
        bodySkin[1].setAttribute("checked", "true");
    } else {
        bodySkin[0].setAttribute("checked", "true");
    }
}
