window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("hide");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 2000);
});

// ====== galery item filter ======

const filterContainer = document.querySelector(".galery-filter"),
    filterButtons = filterContainer.children,
    totalFilterButtons = filterButtons.length,
    galeryItem = document.querySelectorAll(".galery-item"),
    totalgaleryItem = galeryItem.length;

for (let i = 0; i < totalFilterButtons; i++) {
    filterButtons[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalgaleryItem; k++) {
            if (filterValue === galeryItem[k].getAttribute("data-category")) {
                galeryItem[k].classList.remove("hide");
                galeryItem[k].classList.add("show");
            } else {
                galeryItem[k].classList.remove("show");
                galeryItem[k].classList.add("hide");
            }
            if (filterValue === "all") {
                galeryItem[k].classList.remove("hide");
                galeryItem[k].classList.add("show");
            }
        }
    });
}

// ====== galery Lightbox ======
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxTxt = lightbox.querySelector(".caption-text");
const lightboxCnt = lightbox.querySelector(".caption-counter");
const lightboxCls = lightbox.querySelector(".lightbox-close i");
let itemIndex = 0;

for (let i = 0; i < totalgaleryItem; i++) {
    galeryItem[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

function changeItem() {
    imgSrc = galeryItem[itemIndex].querySelector(".galery-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgSrc;
    lightboxTxt.innerHTML = galeryItem[itemIndex].querySelector("h4").innerHTML;
    lightboxCnt.innerHTML = itemIndex + 1 + " of " + totalgaleryItem;
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function nextItem() {
    if (itemIndex == totalgaleryItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalgaleryItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target === lightboxCls) {
        toggleLightbox();
    }
});

// ====== Aside Navbar ======
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    sections = document.querySelectorAll(".section");

for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener("click", function () {
        for (let j = 0; j < navList.length; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                removeBackSection();
                sections[j].classList.add("back-section");
            }

            navList[j].querySelector("a").classList.remove("active");
        }
        const a = navList[i].querySelector("a");
        a.classList.add("active");

        showSection(a);
        navToggle();
    });
}

function showSection(e) {
    // remove class active for all section
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }
    // const target = e.getAttribute("href").split("#")[1];
    const target = e.getAttribute("href");
    document.querySelector(target).classList.add("active");
}

function removeBackSection() {
    for (let k = 0; k < sections.length; k++) {
        sections[k].classList.remove("back-section");
    }
}

function updateNav(e) {
    console.log(e);
    for (let i = 0; i < navList.length; i++) {
        const nav = navList[i].querySelector("a").getAttribute("href");
        const target = e.getAttribute("href");
        if (nav === target) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", navToggle);

function navToggle() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("open");
    }
}

const hireMeBtn = document.querySelector(".hire-me");
hireMeBtn.addEventListener("click", function () {
    for (let j = 0; j < navList.length; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
            removeBackSection();
            sections[j].classList.add("back-section");
        }

        navList[j].querySelector("a").classList.remove("active");
    }
    showSection(this);
    updateNav(this);
});

// typing animation script
const typed1 = new Typed(".typing-1", {
    strings: ["Calligrapher", "Web Developer", "Freelancer", "Programmer", "Youtuber", "Teacher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
const typed2 = new Typed(".typing-2", {
    strings: ["Calligrapher", "Web Developer", "Freelancer", "Programmer", "Youtuber", "Teacher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
