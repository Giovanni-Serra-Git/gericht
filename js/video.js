const playpause = document.querySelector(".playpause");
let video = document.querySelector("#video_meal");
const sizeImage = document.querySelector(".meal_image").naturalWidth;
const gallery = document.getElementsByClassName("updates_gallery_card");
const gallery_images = document.getElementsByClassName("gallery_images_container")[0];
const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
const hamburgerMenu = document.querySelector("[hamburger-menu]");
const hamburgerMenuOpen = document.querySelector("[hamburger-menu-open]");
const hamburgerMenuClose = document.querySelector("[hamburger-menu-close]");
const sidePanel = document.querySelector("[sidepanel]");
const navbarLinksSidePanel = document.querySelector("[navbar_links_sidepanel]");
const card = document.querySelector("[gallery-card]");
let sliderGap = document.querySelector("[gallery_images_container]");
let gap = Number(window.getComputedStyle(sliderGap).getPropertyValue("gap").split("px")[1]);


left_arrow.addEventListener("click",  toLeft);

right_arrow.addEventListener("click", toRight);

playpause.addEventListener('click', checkStateVideo);

function checkStateVideo() {

    playpause.classList.toggle('playing');

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    
}

function toRight() {
    gallery_images.scrollLeft += card.offsetWidth + gap;
}

function toLeft() {
    gallery_images.scrollLeft -= card.offsetWidth - gap;
}

function checkClassActive(element) {
    return element.classList.contains("active");
}

hamburgerMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("hamburger-menu-open") && checkClassActive(e.target) ) {
        e.target.classList.remove("active");
        hamburgerMenuClose.classList.add("active");
        sidePanel.classList.add("active");
    } else if (e.target.classList.contains("hamburger-menu-close") && checkClassActive(e.target)) {
        e.target.classList.remove("active");
        hamburgerMenuOpen.classList.add("active");
        sidePanel.classList.remove("active");

    }
})


navbarLinksSidePanel.querySelectorAll("li").forEach( list => list.addEventListener("click", e => {
    hamburgerMenuOpen.classList.add("active");
    hamburgerMenuClose.classList.remove("active");
    sidePanel.classList.remove("active");
} ))