"use strict";
let menu = document.querySelectorAll(".menu");
let pages = document.querySelectorAll(".navbarPagesHeading");
menu.forEach((menuElement) => {
    menuElement.addEventListener("click", () => {
        pages.forEach((page) => {
            if (page.style.display === "none" || page.style.display === "") {
                page.style.display = "block";
            }
            else {
                page.style.display = "none";
            }
        });
    });
});
